import { createContext } from 'react';
import io from 'socket.io-client';

export const ModalContext = createContext(null);
export const ChatContext = createContext(io('http://localhost:8080'));
export const UnreadMessageContext = createContext();
