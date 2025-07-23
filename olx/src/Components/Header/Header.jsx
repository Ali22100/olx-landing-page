import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="category-bar">
      <div className="category-list">
        <a href="#" className="category-item all-categories">
          <strong>All Categories</strong> <FaChevronDown size={10} />
        </a>
        <a href="#" className="category-item">Mobile Phones</a>
        <a href="#" className="category-item">Cars</a>
        <a href="#" className="category-item">Motorcycles</a>
        <a href="#" className="category-item">Houses</a>
        <a href="#" className="category-item">Video-Audios</a>
        <a href="#" className="category-item">Tablets</a>
        <a href="#" className="category-item">Land & Plots</a>
      </div>
    </div>
  );
};

export default Header;
