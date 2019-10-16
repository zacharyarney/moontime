import React/*, { useState, useEffect }*/ from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div>
      <Link to="/chat">Start chatting</Link>
      <form onSubmit={props.handleLogin}>
        <label>
          {'Enter a user name: '}
          <input value={props.value} onChange={props.handleInput} />
        </label>
      </form>
    </div>
  );
};

export default Login;
