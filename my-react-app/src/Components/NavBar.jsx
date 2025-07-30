import React, { useState } from 'react';
import './NavBar.css'; 

function NavBar({ products, onCategoryChange, onSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const [searchedProduct, setSearchedProduct] = useState('');

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    onCategoryChange(selectedValue);
  };

  const handleSearchInput = (e) => {
    const inputText = e.target.value;
    setSearchedProduct(inputText);
    onSearch(inputText);
  };

  const categoryList = (
    <select onChange={handleCategoryChange} value={selectedCategory} className="nav-select">
      <option value=''>Categories</option>
      {uniqueCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="nav-link" href="/home">Home</a>
        <a className="nav-link" href="/cart">Cart</a>
        {categoryList}
      </div>
      <div className="navbar-right">
        <input
          className="search-input"
          type="search"
          placeholder="Search Product"
          aria-label="Search"
          onChange={handleSearchInput}
          value={searchedProduct}
        />
      </div>
    </nav>
  );
}

export default NavBar;
