import React from 'react';
import './sortBtn.css';

const SortButton =({text})=>{
    return(
        <div className="sort_btn">
            <button>{text}</button>
        </div>
    );
}

export default SortButton;