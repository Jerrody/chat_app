import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      
      <div>Some chat stuff.</div>
    </div>
  );
};

export default Chat;
