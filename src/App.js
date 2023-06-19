import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? (
          <p>
            Welcome! You are logged in.
          </p>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
