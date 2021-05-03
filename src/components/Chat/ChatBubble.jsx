// noinspection JSCheckFunctionSignatures

import React, { useContext, useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../Contexts';
import Tooltip from '../Tooltip/Tooltip';

import './ChatBubble.css';

function ChatBubble({ username, recipient }) {
  const socket = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    socket.emit('chat:open', recipient);

    socket.on('chat:open', (pastMessages) => {
      setMessages(pastMessages);
    });

    socket.on('message:create', (newMessages) => {
      setMessages(newMessages);
    });

    return () => {
      socket.off('chat:open');
      socket.off('message:create');
    };
  }, [recipient]);

  const formatDate = (date) => {
    date = new Date(date);

    const [years, months, days, hours, minutes, seconds] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ].map((v) => v.toString().padStart(2, '0'));

    return `${days}/${months}/${years} a ${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('message:create', recipient, content);

    setContent('');
  };

  return (
    <div>
      Messages a {recipient}:
      <br />
      {messages.map((msg) => (
        <Fragment key={msg.date}>
          {
            <div className={`flex ${msg.from === username ? 'flex-row-reverse' : 'flex-row'} w-full md:w-1/2 py-2`}>
              <p className={msg.from === username ? 'ml-1' : 'mr-1'}>{msg.from}</p>
              <div className="has-tooltip bg-gold-dark rounded-full px-3 w-full">
                {msg.content} <Tooltip>{formatDate(msg.date)}</Tooltip>
              </div>
            </div>
          }
        </Fragment>
      ))}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="px-2 text-black focus:outline-none focus:ring focus:ring-gold-dark rounded-full"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

ChatBubble.propTypes = {
  recipient: PropTypes.string,
};

export default ChatBubble;
