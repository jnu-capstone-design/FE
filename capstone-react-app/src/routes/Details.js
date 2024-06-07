import Header from '../components/header';
import Button from '../components/button';
import ReviewList from '../components/reviewList';
import Reservation from '../components/reservation';
import '../components/foodInfo.css'
import './Details.css';
import { useState } from 'react';

function Details() {
  let [resinfo, setResinfo] = useState(false);

  return(
    <div>
      <Header/>
      <div className='detailArea'>
        <div className='foodImg'>
          <img src='logo192.png'/>
        </div>
        <div className='foodDetail'>
          <p className='store'>외할머니댁</p>
          <h2 className='food'>얼큰 소고기 버섯탕</h2>
          <p className='percent'>50%</p>
          <p className='saleprice'>6950원</p>
          <p className='originalPrice'>13900원</p>
          <p className='stock'>재고 : 3개</p>
          <button className='resButton' onClick={()=>{setResinfo(!resinfo)}}>
            <p className='resText'>예약</p>
            {resinfo == true ? <Reservation store='외할머니댁' hours='9:00 - 20:00' phone='010-0000-0000' address='대한민국'/> : null}
          </button>
        </div>
      </div>
      <div className='reviewArea'>
        <div className='reviewHeader'>
          <h3>상품 리뷰</h3>
        </div>
        <div>
          <ReviewList starrating='⭐⭐⭐⭐⭐' name='김**' time='3분 전' text='맛은 있었는데 양이 조금 아쉽네요' photo='logo192.png' />
          <ReviewList starrating='⭐⭐⭐⭐⭐' name='김**' time='3분 전' text='맛은 있었는데 양이 조금 아쉽네요' photo='logo192.png' />
          <ReviewList starrating='⭐⭐⭐⭐⭐' name='김**' time='3분 전' text='맛은 있었는데 양이 조금 아쉽네요' photo='logo192.png' />
        </div>
      </div>
    </div>
  );
}

export default Details;