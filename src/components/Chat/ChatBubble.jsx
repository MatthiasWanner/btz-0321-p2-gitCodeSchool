import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ChatContext, UnreadMessageContext } from '../Contexts';

import './ChatBubble.css';
import { ChevronRightIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

function ChatBubble({ username, recipient, handleClickChat, avatarUrl }) {
  const socket = useContext(ChatContext);
  const { setUnreadMessage } = useContext(UnreadMessageContext);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  const messageRef = useRef();

  useEffect(() => {
    // noinspection JSUnresolvedFunction
    messageRef.current.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    socket.emit('chat:open', recipient);

    socket.on('chat:open', (pastMessages) => {
      setMessages(pastMessages);
    });

    socket.on('message:create', (newMessages) => {
      setMessages(newMessages);
    });

    socket.on('chat:delete', () => {
      setMessages([]);
    });

    socket.on('message:delete', (deletedMessages) => {
      setMessages(deletedMessages);
    });

    setUnreadMessage((unreadMessage) => --unreadMessage);

    return () => {
      socket.off('chat:open');
      socket.off('chat:delete');
      socket.off('message:create');
      socket.off('message:delete');
    };
  }, [recipient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('message:create', recipient, content);

    setContent('');
  };

  const handlePrune = () => {
    socket.emit('chat:delete', recipient);
  };

  return (
    <div className="box absolute bottom-16 -rigth-16 md:border md:border-gold-dark rounded-lg bg-homeGray-darker text-white  w-72">
      <div className="flex justify-between rounded-t-lg p-2 bg-homeGray-dark">
        {recipient}
        <div className="flex items-center ">
          <button className="focus:outline-none  rounded-full px-1" onClick={handlePrune}>
            <TrashIcon className="h-4" />
            <p className="hidden ">Effacer la discussion</p>
          </button>
          <button onClick={() => handleClickChat(null, null)}>
            <XIcon className="h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col h-96 overflow-auto">
        {messages.map((msg, index) => (
          <div key={msg.date} className={`flex ${msg.from === username ? 'flex-row-reverse' : 'flex-row'} w-full items-center  p-2`}>
            <img src={msg.from !== username ? avatarUrl : localStorage.ghAvatar} alt="photoprofile" className="rounded-full h-6 w-6 flex-shrink-0" />
            <p className={msg.from === username ? 'ml-1' : 'mr-1'} />
            <div
              className={
                msg.from === username
                  ? 'has-tooltip bg-gold-dark text-homeGray-dark rounded-2xl py-0.5 px-3 w-max break-all'
                  : 'has-tooltip bg-homeGray-dark text-gold-dark rounded-2xl px-3 py-0.5 w-max break-all'
              }>
              <p>{msg.content}</p>
            </div>
            {msg.from === username && (
              <button
                onClick={() => {
                  socket.emit('message:delete', recipient, index);
                }}>
                <XIcon className="h-3 text-red-400 mx-1" />
              </button>
            )}
          </div>
        ))}
        <div ref={messageRef} />
      </div>
      <div className="w-full rounded-b-lg bg-homeGray-dark py-2 ">
        <form action="" className="flex flex-row  justify-around md:justify-beetwin sticky items-start " onSubmit={handleSubmit}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-0 md:px-4 text-black focus:outline-none focus:ring focus:ring-gold-dark rounded-full"
          />
          <button type="submit">
            <ChevronRightIcon className="text-gold-dark h-6 border rounded-full border-gold-dark  " />
          </button>
        </form>
      </div>
    </div>
  );
}

ChatBubble.propTypes = {
  username: PropTypes.string,
  recipient: PropTypes.string,
  handleClickChat: PropTypes.func,
  avatarUrl: PropTypes.string,
};

export default ChatBubble;
