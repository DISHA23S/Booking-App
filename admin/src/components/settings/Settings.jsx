import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './settings.scss'; 
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Settings = () => {
  const [siteName, setSiteName] = useState('');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  useEffect(() => {
    // Fetch existing settings from the server
    axios.get('/api/settings')
      .then(response => {
        setSiteName(response.data.siteName);
        setMaintenanceMode(response.data.maintenanceMode);
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const handleSave = () => {
    axios.post('/api/settings', { siteName, maintenanceMode })
      .then(response => alert('Settings saved successfully!'))
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="Settings">
      <h2>Admin Panel Settings</h2>
      <div>
        <label>
          Site Name:
          <input
            type="text"
            value={siteName}
            onChange={e => setSiteName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Maintenance Mode:
          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={e => setMaintenanceMode(e.target.checked)}
          />
        </label>
      </div>
        <button onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  </div>
    
  );  
};

export default Settings;
