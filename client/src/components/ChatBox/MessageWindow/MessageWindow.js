import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoint } from '../../../util/socketStuff';

export const MessageWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      console.log(res);
      setMessages(res.data.messages);
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
