import React, { useState } from 'react';
import { UsersIcon } from '@heroicons/react/solid';
import Chat from '../Chat/Chat';
import './BotBar.css';

function BotBar() {
  const [chat, setChat] = useState(false);

  return (
    <>
      <div className="md:flex md:w-full md:mb-16 md:items-end md:justify-end">
        <div className="md:w-16 md:h-16 md:rounded-full md:border md: md:bottom-0 h-16 w-full flex justify-end items-center border-t border-gold-dark bg-homeGray-darker  fixed bottom-0 visible z-50 mb-2 mr-2">
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
