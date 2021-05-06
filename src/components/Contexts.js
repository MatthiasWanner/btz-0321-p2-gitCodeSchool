import { createContext } from 'react';
import io from 'socket.io-client';

console.log('import');

export const ModalContext = createContext(null);
export const ChatContext = createContext(io('https://websocket-server-gitcodeschool.herokuapp.com/'));
