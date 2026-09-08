import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Check saved user role from step 1
      const role = localStorage.getItem('userRole') || 'student';
      
      if (role === 'tutor') {
        navigate('/tutor-onboarding/docs');
      } else {
        navigate('/landing');
      }
    }
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

      {/* Right side login form */}
      <div className="right-content">
        <div className="login-form-box">
          <h1 className="login-title">Hi, Welcome Back</h1>
          <p className="login-subtitle">Login to continue</p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
                <label>Password</label>
                <div className="password-input-wrapper-two">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="toggle-pwd-btn-two"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

            <div className="forgot-pwd-container">
              <span>Forgot Password?</span>
              <span className="reset-link">Reset</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={!isFormValid}
            >
              Log in
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Non-functional Google button */}
          <button type="button" className="google-btn">
            <span className="google-icon">G</span> Login with Google
          </button>

          <p className="signup-redirect-text">
            Don't have an account?{' '}
            <span
              className="signup-redirect-link"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;