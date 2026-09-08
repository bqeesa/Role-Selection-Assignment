import { Link } from 'react-router-dom'
import '../styles/globals.css'

const ProductCard = ({ name, description, price, image }) => (
  <div className="related-product-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p className="description">{description}</p>
    <p className="price">{price}</p>
  </div>
);

const ProductDetailPage = () => {
  const relatedProducts = [
    { id: 1, name: 'Product', description: 'Description of first product', price: '$10.99', image: '/images/Image12.png' },
    { id: 2, name: 'Product', description: 'Description of second product', price: '$10.99', image: '/images/Image7.png' },
    { id: 3, name: 'Product', description: 'Description of third product', price: '$10.99', image: '/images/Image10.png' },
    { id: 4, name: 'Product', description: 'Description of fourth product', price: '$10.99', image: '/images/Image9.png' },
    { id: 5, name: 'Product', description: 'Description of fifth product', price: '$10.99', image: '/images/Image14.png' },
    { id: 6, name: 'Product', description: 'Description of sixth product', price: '$10.99', image: '/images/Image8.png' },
  ];

  return (
    <div className="product-detail-container">
      <nav className="navbar">
        <div className="logo">
           <Link to="/">  The Edge</Link>
          </div>

        <div className="nav-links">
         
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/article">Article</Link>
         < Link to="/landing"> Landing Page</Link>
         <Link to="/product">
         <button className="btn-primary">Product Detail</button>
         </Link>
        </div>
      </nav>

    

      <section className="main-product-section">
        <div className="main-product-image">
          <img src="/images/Image13.png" alt="Product main view" />
        </div>

        <div className="main-product-info">
          <h1>Product name</h1>
          <p className="subheading">Subheading</p>
          <p className="price">$10.99</p>
          <p className="description">
            Body text for describing what this product is and why this product is simply a must-buy.
          </p>

          <button className="btn-add-to-cart">Add to cart</button>
          
          <p className="fine-print">
            Text box for additional details or fine print
          </p>
        </div>
      </section>

      <section className="related-products-section">
        <h2>Related products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">Site name</div>
        </div>

        <div className="footer-links">
          {[1, 2, 3].map((col) => (
            <div key={col} className="footer-column">
              <h4>Topic</h4>
              <p>Page</p>
              <p>Page</p>
              <p>Page</p>
            </div>
          ))}
        </div>
        
    
      </footer>
    </div>
  );
};

export default ProductDetailPage;