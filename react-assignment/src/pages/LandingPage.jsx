import { Link } from 'react-router-dom';
import '../styles/globals.css'
function Landingpage  ()  {

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">The Edge</Link>
        </div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/product">Product Details</Link>
          <Link to="/shop">Shop</Link>
         < Link to="/article">Article</Link>
         <Link to="/landing">
         <button className="btn-primary">LandingPage</button>
         </Link>
          </div>
      </nav>

      <section className="hero-section">
        <h1>Landing page title</h1>
        <p>
          Subheading that sets up context, shares more info about the website,
          or generally gets people psyched to keep watching.
        </p>
        <button className="btn-primary">Button</button>
      </section>

      <section className="cards-section">
        <h2>Section heading</h2>
        <div className="cards-grid">
          <div className="card">
            <img src="/images/image1.png" alt="Feature 1" />
            <h3>Subheading</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>

          <div className="card">
            <img src="/images/Image2.png" alt="Feature 2" />
            <h3>Subheading</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>

          <div className="card">
            <img src="/images/Image3.png" alt="Feature 3" />
            <h3>Subheading</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-text">
          <h2>Section heading</h2>

          <div className="feature-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>

          <div className="feature-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>

          <div className="feature-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to expand on the main point.</p>
          </div>
        </div>

        <div className="feature-image">
          <img src="/images/Image4.png" alt="Feature Detail" />
        </div>
      </section>

      <section className="dual-card-section">
        <h2>Section heading</h2>
        <div className="dual-card-grid">
          <div className="card">
            <img src="/images/Image3.png" alt="Feature 5" />
            <h3>Subheading</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points.
            </p>
          </div>

          <div className="card">
            <img src="/images/Image5.png" alt="Feature 6" />
            <h3>Subheading</h3>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Section heading</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">"A terrific piece of praise"</p>
            <div className="user-info">
              <img src="/images/Avatar.png" alt="Avatar" />
              <div>
                <p className="name">Name</p>
                <p className="description">Description</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="quote">"A fantastic bit of feedback"</p>
            <div className="user-info">
              <img src="/images/Avatar2.png" alt="Avatar" />
              <div>
                <p className="name">Name</p>
                <p className="description">Description</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p className="quote">"A positively glowing review"</p>
            <div className="user-info">
              <img src="/images/Avatar3.png" alt="Avatar" />
              <div>
                <p className="name">Name</p>
                <p className="description">Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-cta">
        <h2>Section heading</h2>
        <div className="banner-buttons">
          <button className="btn-primary">Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">Site name</div>
          <div className="social-icons">
          </div>
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
      </footer>
    </div>
  );
};

export default Landingpage;