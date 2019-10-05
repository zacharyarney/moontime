import React, { useState, useEffect } from 'react';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import Login from './components/Login/Login';

const App = () => {
  const [userName, setUserName] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setUserName(localStorage.getItem('userName'));
    }
  }, []);

  const handleInput = (e) => setValue(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    setUserName(value);
    localStorage.setItem('userName', value);
  };

  return (
    <div className="App">
      {userName ? (
        <ChatBox />
      ) : (
        <Login handleLogin={handleLogin} handleInput={handleInput} />
      )}
    </div>
  );
};

export default App;
