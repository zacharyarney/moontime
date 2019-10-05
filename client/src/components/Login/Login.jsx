import React from 'react';

const Login = (props) => {
  return (
    <form onSubmit={props.handleLogin}>
      <label>
        {'Enter a user name: '}
        <input value={props.value} onChange={props.handleInput} />
      </label>
    </form>
  );
};

export default Login;
