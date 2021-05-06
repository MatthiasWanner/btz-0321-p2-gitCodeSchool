import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../Contexts';
import ChatBubble from './ChatBubble';

function Chat({ username }) {
  const socket = useContext(ChatContext);

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  useEffect(() => {
    socket.on('user:connect', (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });

    socket.on('user:disconnect', (onlineUsers) => {
      setOnlineUsers(onlineUsers);
    });

    return () => {
      socket.off('user:connect');
      socket.off('user:disconnect');
    };
  }, [username]);

  return (
    <>
      <div className="flex  justify-end mt-14 mb-16 md:fixed margBox ">
        {activeChat && <ChatBubble recipient={activeChat} username={username} setActiveChat={setActiveChat} />}
        <div className="boxOnline w-4/5 md:w-72 text-white h-96 bg-homeGray-dark  p-2 md:border md:border-gold-dark border-t border-l border-r border-gold-dark">
          <p className="border-b w-1/2 border-gold-dark">Online</p>
          {onlineUsers
            .filter((user) => user !== username)
            .map((user) => (
              <div className="rounded-full flex p-2 my-4 flex items-center" key={user}>
                <div className="bg-green-200 rounded-full h-6 w-6 flex-shrink-0" />
                <button className="w-full focus:outline-none flex justify-start pl-4" key={user} onClick={() => setActiveChat(user)}>
                  {user}
                </button>
                <div className="bg-green-online rounded-full h-2 w-2 flex-shrink-0" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
