import React from 'react';
import './reviewList.css';

const ReviewList = ({starrating, name, time, text, photo}) => {

  return (
    <div className='review_list'>
      <div className='reviewContents'>
        <div className='reviewTitle'>
          <span>{starrating}</span>
          <p>{name}</p>
          <p style={{color: 'lightgrey', fontSize: '12px'}}>{time}</p>
        </div>
        <div className='reviewText'>{text}</div>
      </div>
      <div className='reviewPhoto'>
        <img src={photo} width='100px'></img>
      </div>
    </div>
  );
}

export default ReviewList;