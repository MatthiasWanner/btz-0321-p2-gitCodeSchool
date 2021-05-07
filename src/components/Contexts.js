import { createContext } from 'react';
import io from 'socket.io-client';

export const ModalContext = createContext(null);
export const ChatContext = createContext(io('https://websocket-server-gitcodeschool.herokuapp.com/'));
export const UnreadMessageContext = createContext();
