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
    <div className="my-14  w-4/5 md:w-80 border border-gold-dark text-white">
      <p>Pseudo: {username}</p>
      <br />
      <p>Utilisateurs en ligne :</p>
      {onlineUsers
        .filter((user) => user !== username)
        .map((user) => (
          <button key={user} onClick={() => setActiveChat(user)}>
            {user}
          </button>
        ))}
    </div>
  {activeChat && <ChatBubble recipient={activeChat} username={username} setActiveChat={setActiveChat} />}
  </>
  );
}

Chat.propTypes = {
  username: PropTypes.string,
};

export default Chat;
