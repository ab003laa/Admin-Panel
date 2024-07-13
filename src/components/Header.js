import React from 'react';
import '../App.css';
import AccountLogo from '../assets/pic1.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };
  return (
    <header className="header">
      <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>Logout</button>
      <div className="user-profile">
      
        <img src={AccountLogo} alt="Profile" />
        <span>Admin User</span>
      </div>
    </header>
  );
};

export default Header;
