// src/App.js
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import InstructorPage from './components/InstructorPage';
import AdminPage from './components/AdminPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = (type, name) => {
    setLoggedIn(true); //flag
    setUserType(type);
    setUsername(name);
  };

  return (
    <div>
      {!loggedIn && <LoginPage onLogin={handleLogin} />}
      {loggedIn && userType === 'instructor' && <InstructorPage userType={userType} username={username} />}
      {loggedIn && userType === 'admin' && <AdminPage userType={userType} />}
    </div>
  );
};

export default App;
