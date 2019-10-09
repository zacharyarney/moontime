import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoint, socket } from '../../../util/socketStuff';

const MessageWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setMessages(res.data.messages);
    });

    socket.on('receiveMessage', (msg) => {
      // setMessages must be a functional update for this to work!
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

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
