import Header from '../components/header';
import Button from '../components/button';
import './Details.css';
import '../App.css';
import '../components/foodInfo.css'

function Details() {
  return(
    <div className='App'>
      <Header/>
      <div>
        <div className='foodImg'>
          <img src='logo192.png'/>
        </div>
        <div className='foodDetail'>
          <p className='store'>외할머니댁</p>
          <h2 className='food'>얼큰 소고기 버섯탕</h2>
          <p className='percent'>50%</p>
          <p className='saleprice'>6950원</p>
          <p className='price'>13900원</p>
          <p className='stock'>재고 : 3개</p>
          <Button text='예약'/>
        </div>
        <>
          <div className='reviewHeader'>
            <h3>상품 리뷰</h3>
          </div>
          <div className='reviewList'>
            <div>
              <div className='comment'>
                <span>⭐⭐⭐⭐⭐</span>
                <p>김**</p>
                <p style={{color: 'lightgrey', fontSize: '12px'}}>3분 전</p>
              </div>
              <div>
                <p>맛은 있었는데 양이 조금 아쉽네요</p>
              </div>
            </div>
            <div className='reviewImg'>
              <img className='reviewImg' src='logo192.png'/>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Details;