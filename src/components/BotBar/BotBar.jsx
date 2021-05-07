import React, { useState, useContext, useEffect } from 'react';
import { ChatContext, UnreadMessageContext } from '../Contexts';
import { UsersIcon } from '@heroicons/react/solid';
import Chat from '../Chat/Chat';
import './BotBar.css';

function BotBar() {
  const socket = useContext(ChatContext);
  const { setUnreadMessage } = useContext(UnreadMessageContext);
  const [chat, setChat] = useState(false);

  useEffect(() => {
    socket.on('message:new', () => {
      setUnreadMessage((unreadMessage) => ++unreadMessage);
    });

    return () => {
      socket.off('message:new');
    };
  }, []);

  return (
    <>
      <div className="md:flex md:w-full md:mb-16 md:items-end md:justify-end">
        <div className="md:w-16 md:h-16 md:rounded-full md:border md: md:bottom-0 h-16 w-full flex justify-end items-center border-t border-gold-dark bg-homeGray-darker bottom-0 fixed  visible z-50">
          <button onClick={() => setChat(!chat)}>
            <UsersIcon className="h-8 text-white flex pr-4 focus:outline-none" />
          </button>
        </div>
        <div className={` ${chat ? 'fixed' : 'hidden'} bottom-0 w-4/5 botbar`}>
          <Chat username={localStorage.ghUsername} />
        </div>
      </div>
    </>
  );
}

export default BotBar;
