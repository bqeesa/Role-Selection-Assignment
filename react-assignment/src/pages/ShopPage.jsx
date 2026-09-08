import { Link } from 'react-router-dom'
import '../styles/globals.css'

const ShopPage = () => {
  return (
    <div className="shop-container">
      <header className="shop-hero">
        <img src="/images/Image11.png" alt="" className='hero-bg-img' />
        <nav className="navbar">
          <div className="logo">
            <Link to="/">The Edge</Link>
          </div>
          <div className="nav-links">
            <Link to="/about">About</Link>
          <Link to="/product">Product Detail</Link>
          <Link to="/article">Article</Link>
         <Link to="/landing">Landing Page</Link>
         <Link to="/shop">
         <button className="btn-primary">Shop</button>
         </Link>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Shop title</h1>
          <p>Subheading with description of your shopping site</p>
          <button className="btn-primary">Button</button>
           </div>
       
      </header>

      <section className="promo-section">
        <div className="promo-text">
          <h2>Heading</h2>
          <p>A subheading for this section, as long or as short as you like.</p>
          <div className="button-group">
            <button className="btn-primary">Button</button>
            <button className="btn-secondary">Secondary button</button>
          </div>
        </div>
        <div className="promo-image">
          <img src="/images/Image12.png" alt="Promo visual 1" />
        </div>
      </section>

      <section className="promo-section reverse">
        <div className="promo-image">
          <img src="/images/Image10.png" alt="Promo visual 2" />
        </div>
        <div className="promo-text">
          <h2>Heading</h2>
          <p>A subheading for this section, as long or as short as you like.</p>
          <div className="button-group">
            <button className="btn-primary">Button</button>
            <button className="btn-secondary">Secondary button</button>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2>Section heading</h2>
        <div className="products-grid">
          <div className="product-card featured">
            <img src="/images/Image11.png" alt="Featured product" />
            <h3>Featured product</h3>
            <p className="description">Description of featured product</p>
            <p className="price">$10.99</p>
          </div>

          <div className="side-products">
            <div className="product-card">
              <img src="/images/Image10.png" alt="Top product" />
              <h3>Product</h3>
              <p className="description">Description of top product</p>
              <p className="price">$10.99</p>
            </div>

            <div className="product-card">
              <img src="/images/Image9.png" alt="Lower product" />
              <h3>Product</h3>
              <p className="description">Description of lower product</p>
              <p className="price">$10.99</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Section heading</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="icon"></span>
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.</p>
          </div>

          <div className="benefit-item">
            <span className="icon"></span>
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very short story.</p>
          </div>

          <div className="benefit-item">
            <span className="icon"></span>
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very short story.</p>
          </div>

          <div className="benefit-item">
            <span className="icon"></span>
            <h3>Subheading</h3>
            <p>Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very short story.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">Site name</div>
            </div>
          <div className="social-icons">
            <img src="/images/Icon.png" alt="Social Icon" />
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

export default ShopPage;