import React, { useState } from 'react';
import { socket } from '../../../util/socketStuff';

export const ChatInput = () => {
  // This is hooks
  const [value, setValue] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', { value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleInput} />
    </form>
  );
};
