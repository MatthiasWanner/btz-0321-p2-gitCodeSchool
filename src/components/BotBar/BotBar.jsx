import React, { useState, useContext, useEffect } from 'react';
import { ChatContext, UnreadMessageContext } from '../Contexts';
import { UsersIcon } from '@heroicons/react/solid';
import Chat from '../Chat/Chat';
import './BotBar.css';

function BotBar() {
  const socket = useContext(ChatContext);
  const { unreadMessage, setUnreadMessage } = useContext(UnreadMessageContext);
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
        <div className="md:w-16 md:h-16 md:rounded-full md:border md: md:bottom-0 h-16 w-full flex justify-center items-center border-t border-gold-dark bg-homeGray-darker  fixed bottom-0 visible z-50 mb-2 mr-2">
          <button onClick={() => setChat(!chat)}>
            <UsersIcon className="h-8 text-gold-dark flex focus:outline-none" />
          </button>
          {unreadMessage > 0 && <div className="absolute self-start h-4 w-4 bg-red-800 animate-pulse rounded-full" />}
        </div>
        <div className={` ${chat ? 'fixed' : 'hidden'} bottom-0 w-4/5 botbar`}>
          <Chat username={localStorage.ghUsername} />
        </div>
      </div>
    </>
  );
}

export default BotBar;
