// Logout.js
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const Logout = () => {
  const { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    // Implement logout logic here, e.g., clear user session
    setUser(null);
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
