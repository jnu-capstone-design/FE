import React from 'react';
import './categories.css';

const Category = ({icon,name}) => {
  return (
    <div className="area">
        <div className="cate1">
          <div className="div10">{icon}</div>
          <div className="div11">{name}</div>
        </div>
    </div>
  );
}

export default Category;