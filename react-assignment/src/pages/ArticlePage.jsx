import { Link } from 'react-router-dom'
import '../styles/globals.css'

const Article = () => {
  return (
    <div className="article-container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/"> The Edge</Link>
        </div>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/product">Product Details</Link>
          <Link to="/shop">Shop</Link>
         <Link to="/landing">Landing Page</Link>
          <Link to="/article">
         <button className="btn-primary">Article</button>
         </Link>
        </div>
      </nav>

      <header className="article-header">
        <h1>Article or post title</h1>
        <p className="subheading">
          Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
        </p>
      </header>

      <div className="main-image-container">
        <img src="/images/Image6.png" alt="Article main visual" />
      </div>

      <section className="article-body">
        <div className='article-text'>
        <p className="lead-text">
          Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
        </p>
        <p>
          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
        </p>
        <p>
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
        </p>
        </div>

        <div className="article-images-grid">
          <img src="/images/Image3.png" alt="Article secondary detail 1" />
          <img src="/images/Image2.png" alt="Article secondary detail 2" />
        </div>

        <div className='article-text'>
          <p>
          Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Berzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
        </p>
        <p>
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
        </p>

        </div>

        
      </section>

      <section className="related-articles-section">
        <h2>Related articles or posts</h2>
        <div className="related-grid">
          <div className="related-card">
            <img src="/images/Image7.png" alt="Related article 1" />
            <h3>Title</h3>
            <p className="author">Author</p>
          </div>

          <div className="related-card">
            <img src="/images/Image8.png" alt="Related article 2" />
            <h3>Title</h3>
            <p className="author">Author</p>
          </div>

          <div className="related-card">
            <img src="/images/Image9.png" alt="Related article 3" />
            <h3>Title</h3>
            <p className="author">Author</p>
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

export default Article;