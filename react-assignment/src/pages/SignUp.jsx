import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+234',
    phone: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Country codes array (mapped through directly, no external API/emojis)
  const countryCodes = [
    { code: '+234', label: '+234' },
    { code: '+1', label: '+1' },
    { code: '+44', label: '+44' },
    { code: '+20', label: '+20' },
    { code: '+971', label: '+971' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Button disabled until every single detail is filled and valid
  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== ''  &&
    formData.password.trim() !== '' &&
    formData.confirmPassword.trim() !== '' &&
    formData.password === formData.confirmPassword &&
    formData.agreedToTerms;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/verify');
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

      {/* Right side signup form */}
      <div className="right-content">
        <div className="signup-form-box">
          <h1 className="signup-title">Create an Account</h1>
          <p className="signup-subtitle">Please enter your details to get started</p>

          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="input-field"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="input-field"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

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

            {/* Phone Number with custom container */}
            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input-container">
                <select
                  name="countryCode"
                  className="country-select"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="phone-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="toggle-pwd-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <div className="password-wrapper">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    className="input-field"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="toggle-pwd-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
              />
              <label htmlFor="terms">I agree to the Terms of Service & Privacy Policy</label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={!isFormValid}
            >
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Non-functional Google button */}
          <button type="button" className="google-btn">
            <span className="google-icon">G</span> Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;