import React, { useEffect } from 'react';
import { ChatInput } from './ChatInput/ChatInput';
import { MessageWindow } from './MessageWindow/MessageWindow';
import { socket } from '../../util/socketStuff.js';

export const ChatBox = () => {
  useEffect(() => {
    console.log('local', localStorage.getItem('userName'));
    socket.on('connected', (data) => {
      console.log('data', data);
    });
  }, []);

  return (
    <div>
      <MessageWindow />
      <ChatInput />
    </div>
  );
};
