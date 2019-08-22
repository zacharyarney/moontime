import React, { useState } from 'react';

export const ChatInput = () => {
  // This is hooks
  const [value, setValue] = useState('');

  const handleInput = (e) => setValue(e.target.value);

  return (
    <input value={value} onChange={handleInput} />
  )
}
