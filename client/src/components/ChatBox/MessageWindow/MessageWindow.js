import React from 'react';

export const MessageWindow = () => {
  const messages = [
    {
      id: 1,
      user: 'User 1',
      timestamp: new Date(),
      body: 'Hello this is message',
    },
    {
      id: 2,
      user: 'User 2',
      timestamp: new Date(),
      body: 'Hello this is also message',
    },
    {
      id: 3,
      user: 'User 1',
      timestamp: new Date(),
      body: 'Indeed',
    },
  ];

  return (
    <div>
      {messages.map((msg) => (
        <li key={msg.id}>{msg.body}</li>
      ))}
    </div>
  );
};
