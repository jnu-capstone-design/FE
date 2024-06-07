import React from 'react';
import './reservation.css';

const Reservation =({store,hours,phone,address})=>{
  
  return(
    <div className="reservationInfo">
      <h3>{store}</h3>
      <p>영업시간 : {hours}</p>
      <p>전화번호 : {phone}</p>
      <p>주소 : {address}</p>
      <button>닫기</button>
  </div>
  );
}

export default Reservation;