import React,  { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TutorOnboarding.css';

function TutorOnboardingDocs() {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    idFile: null,
    academicFile: null,
    arabicFile: null,
    photoFile: null
  });

  const fileInputs = {
    idFile: useRef(null),
    academicFile: useRef(null),
    arabicFile: useRef(null),
    photoFile: useRef(null)
  };

  const handleFileChange = (key, e) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({
        ...prev,
        [key]: e.target.files[0].name
      }));
    }
  };

  const triggerUpload = (key) => {
    fileInputs[key].current.click();
  };

  const uploadFields = [
    { key: 'idFile', title: 'Government-issued ID*', hint: "For identity verification (e.g. National ID, passport, driver's license)", btnText: '↑ Add File' },
    { key: 'academicFile', title: 'Academic Certificate*', hint: 'Proof of educational background (e.g. Degree, Diploma, NCE, high school certificate)', btnText: '↑ Add File' },
    { key: 'arabicFile', title: 'Arabic and Islamic-related Certificates*', hint: 'Proof of Arabic and Islamic-related education (e.g. Quran, Fiqh, e.t.c.)', btnText: '↑ Add File' },
    { key: 'photoFile', title: 'Profile Photo (Headshot)*', hint: 'Clear photo for your tutor profile (helps students identify you)', btnText: '↑ Upload Photo' }
  ];

  return (
    <div className="onboarding-container">
      {/* 4-Step Stepper Bar */}
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

      <h1 className="onboarding-title">Documents Upload</h1>
      <p className="onboarding-subtitle">
        Please upload your identification and qualification documents. This helps us confirm your teaching credentials.
      </p>

      {/* 4 Upload Containers */}
      {uploadFields.map((field) => (
        <div key={field.key} className="upload-card">
          <strong className="upload-card-title">{field.title}</strong>
          <p className="upload-card-hint">{field.hint}</p>

          {files[field.key] && (
            <span className="file-selected-name">✓ Selected: {files[field.key]}</span>
          )}

          <input
            type="file"
            ref={fileInputs[field.key]}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(field.key, e)}
          />

          <button
            type="button"
            className="upload-btn"
            onClick={() => triggerUpload(field.key)}
          >
            {field.btnText}
          </button>
        </div>
      ))}

      {/* Navigation Footer */}
      <div className="onboarding-footer">
        <button
          className="nav-btn"
          onClick={() => navigate('/login')}
        >
          ← Back
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate('/tutor-onboarding/availability')}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default TutorOnboardingDocs;