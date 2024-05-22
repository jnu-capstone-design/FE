import React from 'react';
import './categoryButton.css';

const CategoryButton =({text})=>{
    return(
        <div className="category_button">
            <button>{text}</button>
        </div>
    );
}

export default CategoryButton;