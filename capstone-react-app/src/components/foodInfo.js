import React from 'react';
import './foodInfo.css';

const Foodinfo = ({picture,store,food,price,percent,saleprice,comments}) => {
  return (
    <div className="area2">
        <div className="picture">
            <img src={picture}></img>
        </div>
        <div className="store">
            <p>{store}</p>
        </div>
        <div className="food">
            <p>{food}</p>
        </div>
        <div>
            <div className="price">
                <p>{price}</p>
            </div>
            <div className="percent">
                <p>{percent}</p>
            </div>
            <div className="saleprice">
                <p>{saleprice}</p>
            </div>
        </div>

        <div className="comments">
            <p>{comments}</p>
        </div>
    </div>
  );
}

export default Foodinfo;