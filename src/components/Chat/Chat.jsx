import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../Contexts';
import ChatBubble from './ChatBubble';
import User from '../User/User';

function Chat({ username }) {
  const socket = useContext(ChatContext);

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [activeAvatar, setActiveAvatar] = useState(null);

  const handleClickChat = (user, url) => {
    setActiveChat(user);
    setActiveAvatar(url);

    socket.emit('chat:close');
  };

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
      <div className={`flex justify-end mt-14 mb-16 margBox`}>
        {activeChat && <ChatBubble recipient={activeChat} username={username} handleClickChat={handleClickChat} avatarUrl={activeAvatar} />}
        <div className="boxOnline w-4/5 md:w-72 text-white h-96 bg-homeGray-dark md:rounded-lg p-2 md:border md:border-gold-dark border-t border-l border-r border-gold-dark">
          <p className="border-b w-1/2 border-gold-dark">Online</p>
          {onlineUsers
            .filter((user) => user !== username)
            .map((user) => {
              return <User user={user} handleClickChat={handleClickChat} key={user} />;
            })}
        </div>
      </div>
    </>
  );
}

Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
