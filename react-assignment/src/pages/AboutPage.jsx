import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css'

function AboutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="about-container">
      <header className="navbar">
        <div className="logo">
          <Link to="/">The Edge</Link>
        </div>
        <nav className="nav-links">
            <Link to="/landing">Landing Page</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/article">Article</Link>
          <Link to="/product">Product Details</Link>
          <Link to="/landing">
         </Link>
          <button className="btn-primary">About</button>
        </nav>
      </header>

      <section className="about-hero">
        <div className="about-text-content">
          <h1>About</h1>
          <p className="subheading">Subheading for description or instructions</p>
          <p className="about-lead">
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p className="about-body">
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>

          <div className="contact-section">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smitherton"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@janesfakedomain.net"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your question or message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                />
              </div>

              <button type="submit" className="btn-submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="about-image-container">
          <img 
            src="/images/Image16.png" 
            alt="Portrait" 
            className="about-portrait"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">Site name</div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Topic</h4>
              <p>Page</p>
              <p>Page</p>
              <p>Page</p>
            </div>
            <div className="footer-column">
              <h4>Topic</h4>
              <p>Page</p>
              <p>Page</p>
              <p>Page</p>
            </div>
            <div className="footer-column">
              <h4>Topic</h4>
              <p>Page</p>
              <p>Page</p>
              <p>Page</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <img src="/images/icon.png" alt="Social Icon" />
            <img src="/images/icon.png" alt="Social Icon" />
            <img src="/images/icon.png" alt="Social Icon" />
            <img src="/images/icon.png" alt="Social Icon" />
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;