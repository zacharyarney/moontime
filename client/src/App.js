import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import './App.css';
import ChatBox from './components/ChatBox/ChatBox';
import Login from './components/Login/Login';
import PrivateRoute from './util/PrivateRoute';

const App = () => {
  const [userName, setUserName] = useState('');
  const [value, setValue] = useState('');
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('userName')) {
      setUserName(localStorage.getItem('userName'));
    }
  }, []);

  const handleInput = (e) => setValue(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', value);
    setUserName(value);
    history.push('/chat');
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Login
            {...props}
            handleLogin={handleLogin}
            handleInput={handleInput}
          />
        )}
      />
      <PrivateRoute path="/chat" component={ChatBox} userName={userName} />
    </Switch>
  );
};

export default App;
