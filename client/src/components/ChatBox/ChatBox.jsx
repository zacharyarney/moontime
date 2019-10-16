import React, { useEffect } from 'react';
import ChatInput from './ChatInput/ChatInput';
import MessageWindow from './MessageWindow/MessageWindow';
import { socket } from '../../util/socketStuff.js';

const ChatBox = (props) => {
  useEffect(() => {
    console.log('local', localStorage.getItem('userName'));
    socket.on('connected', (data) => {
      console.log('data', data);
    });
  }, []);

  return (
    <div>
      <MessageWindow />
      <ChatInput {...props} />
    </div>
  );
};

export default ChatBox;
