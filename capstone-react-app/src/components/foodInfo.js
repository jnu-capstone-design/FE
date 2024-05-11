import React from 'react';
import './foodInfo.css';

const Foodinfo = ({picture,name,price,percent,price2,comments}) => {
  return (
    <div className="area2">
        <div className="picture">
            <img src={picture}></img>
        </div>
        <div className="name">
            <h3>{name}</h3>
        </div>
        <div className="price">
            <h3>{price}</h3>
        </div>
        <div className="percent">
            <h3>{percent}</h3>
        </div>
        <div className="price2">
            <h3>{price2}</h3>
        </div>
        <div className="comments">
            <h4>{comments}</h4>
        </div>
    </div>
  );
}

export default Foodinfo;