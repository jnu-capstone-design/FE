import React from 'react';
import './button.css';

const Button =({text})=>{
    return(
        <div className="button_component">
            <button className="button">{text}</button>
        </div>
    );
}

export default Button;