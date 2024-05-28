import React from 'react';
import './categories.css';

const Category = ({ icon, name }) => {
  return (
    <div className="area">
      <button className="cate1">
        <div className="div10">{icon}</div>
        <div className="div11">{name}</div>
      </button>
    </div>
  );
}

export default Category;