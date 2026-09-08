import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Verification.css';

function Verification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);

  // Handle digit input & auto-focus to next box
  const handleInputChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto focus next input box
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  // Check if all 6 boxes have values
  const isCodeComplete = otp.every((digit) => digit !== '');

  const handleVerify = () => {
    if (isCodeComplete) {
      setIsVerified(true);
    }
  };

  const handleContinueToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="split-container">
      {/* Left side brand banner */}
      <div className="left-banner">
        <div className="brand-logo">
          <span className="logo-small">The</span>
          <span className="logo-large">EDGE</span>
        </div>
      </div>

      {/* Right side verification content */}
      <div className="right-content">
        <div className="verify-form-box">
          {!isVerified ? (
            <>
              <h1 className="verify-title">Email Verification</h1>
              <p className="verify-subtitle">Enter the 6-digit code sent to your email.</p>

              {/* 6 OTP Boxes */}
              <div className="otp-container">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleInputChange(e.target.value, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  />
                ))}
              </div>

              <p className="resend-text">
                Didn't receive the code? <span className="resend-link">Resend</span>
              </p>

              <button
                type="button"
                className="action-btn"
                disabled={!isCodeComplete}
                onClick={handleVerify}
              >
                Verify
              </button>
            </>
          ) : (
            <>
              {/* Stage C: Verification Successful */}
              <h1 className="success-title">
                Verification Successful <span className="success-check-badge">✓</span>
              </h1>

              <button
                type="button"
                className="action-btn"
                onClick={handleContinueToLogin}
              >
                Continue to Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verification;