import React, { useState } from 'react';
import { socket } from '../../../util/socketStuff';

const ChatInput = (props) => {
  // This is hooks
  const [value, setValue] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', { 'user': props.userName, 'body': value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {'Say something: '}
        <input value={value} onChange={handleInput} />
      </label>
    </form>
  );
};

export default ChatInput;
