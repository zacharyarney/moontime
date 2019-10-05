import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoint, socket } from '../../../util/socketStuff';

const MessageWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      // console.log(res);
      setMessages(res.data.messages);
    });
  }, []);

  useEffect(() => {
    socket.on('messages', (data) => {
      setMessages([...messages, data]);
    });
    console.log(messages);
  }, [messages]);

  return (
    <div>
      {messages.map((msg) => (
        <li key={msg.id}>
          {msg.user}: {msg.body}
        </li>
      ))}
    </div>
  );
};

export default MessageWindow;
