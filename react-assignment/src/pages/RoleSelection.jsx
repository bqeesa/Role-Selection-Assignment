import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelection.css';

function RoleSelection({setUserRole}) {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      if (setUserRole) {
        setUserRole(selectedRole);
      }
      
      
      localStorage.setItem('userRole', selectedRole);
      
      
      navigate('/signup');
    }
  };

  return (
    <div className="split-container">
      <div className="left-banner">
        <div className="brand-logo">
          <span className="logo-small">The</span>
          <span className="logo-large">EDGE</span>
        </div>
      </div>

      <div className="right-content">
        <h1 className="role-title">Welcome to The Edge</h1>
        <p className="role-subtitle">Select your role to get started</p>

        <div className="cards-container">
          <div
            className={`role-card ${selectedRole === 'tutor' ? 'selected' : ''}`}
            onClick={() => handleSelectRole('tutor')}
          >
            <div className="circle-icon"></div>
            <h2 className="role-name">I am a Tutor</h2>
            <ul className="role-list">
              <li>Create Classes</li>
              <li>Teach</li>
              <li>Manage Student Progress</li>
            </ul>
          </div>

          <div
            className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
            onClick={() => handleSelectRole('student')}
          >
            <div className="circle-icon"></div>
            <h2 className="role-name">I am a Student</h2>
            <ul className="role-list">
              <li>Join Classes</li>
              <li>Learn</li>
              <li>Track Performance</li>
            </ul>
          </div>
        </div>

        <button
          className="continue-btn"
          disabled={!selectedRole}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;