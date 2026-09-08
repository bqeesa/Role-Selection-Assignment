import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TutorOnboarding.css';

function TutorOnboardingAvailability() {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState('Online');
  const [notes, setNotes] = useState('');

  return (
    <div className="onboarding-container">
      {/* 4-Step Progress Bar */}
      <div className="stepper-bar">
        {[
          { num: 'STEP 1', label: 'Profile Information' },
          { num: 'STEP 2', label: 'Documents Upload' },
          { num: 'STEP 3', label: 'Availability Setup' },
          { num: 'STEP 4', label: 'Review and Submit' }
        ].map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="step-item">
              <div className="step-circle"></div>
              <span className="step-num">{step.num}</span>
              <strong className="step-label">{step.label}</strong>
            </div>
            {idx < 3 && <div className="step-divider"></div>}
          </React.Fragment>
        ))}
      </div>

      <h1 className="onboarding-title">Availability Setup</h1>
      <p className="onboarding-subtitle">
        Tell us your preferred teaching times so we can match you with students more effectively.
      </p>

      <label className="upload-card-title">Teaching Mode</label>

      {/* Interactive Mode Toggles */}
      <div className="mode-group">
        {['Online', 'In-Person', 'Both'].map((mode) => (
          <button
            key={mode}
            type="button"
            className={`mode-btn ${selectedMode === mode ? 'active' : ''}`}
            onClick={() => setSelectedMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>

      <label className="upload-card-title">Availability Notes (Optional)</label>
      <textarea
        className="availability-textarea"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Navigation Footer */}
      <div className="onboarding-footer" style={{ marginTop: '100px' }}>
        <button
          className="nav-btn"
          onClick={() => navigate('/tutor-onboarding/docs')}
        >
          ← Back
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate('/tutor/dashboard')}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default TutorOnboardingAvailability;