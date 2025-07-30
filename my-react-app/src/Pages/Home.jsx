import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import './Home.css';

function Home({ products }) {
  const [expanded, setExpanded] = useState({});
  const { addItem, removeItem, inCart } = useCart();

  const toggleDescription = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  const handleClick = (product) => {
    if (inCart(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const productList = products.map((product) => (
    <div className='product-card' key={product.id}>
      <div className='card'>
        <img
          src={product.image}
          className='card-image'
          alt='Product'
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <h5 className='card-category'>{product.category.toUpperCase()}</h5>
          <p className='card-description'>
            {expanded[product.id]
              ? product.description
              : `${product.description.slice(0, 100)}...`}
          </p>
          {product.description.length > 100 && (
            <button
              className='read-more-button'
              onClick={() => toggleDescription(product.id)}
            >
              {expanded[product.id] ? 'Read Less' : 'Read More'}
            </button>
          )}
          <p className='card-price'>Price: ${product.price}</p>

          <button
            className={`action-button ${inCart(product.id) ? 'remove' : 'add'}`}
            onClick={() => handleClick(product)}
          >
            {inCart(product.id) ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  ));

  return <div className='product-grid'>{productList}</div>;
}

export default Home;