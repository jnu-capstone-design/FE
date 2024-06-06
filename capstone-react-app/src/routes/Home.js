import Header from '../components/header'
import Category from '../components/categories';
import Foodinfo from '../components/foodInfo';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className="App">
          <Header/>
          <div className='categories'>
            <Category icon='🍚' name='한식'/>
            <Category icon='🍔' name='버거'/>
            <Category icon='🥟' name='중식'/>
            <Category icon='🍗' name='치킨'/>
            <Category icon='🍣' name='돈까스/일식'/>
            <Category icon='🍰' name='카페/디저트'/>
            <Category icon='🍕' name='피자'/>
            <Category icon='🍲' name='찜/탕'/>
            <Category icon='🍜' name='분식'/>
            <Category icon='🥗' name='샐러드'/>
            <Category icon='🍖' name='족발/보쌈'/>
            <Category icon='🍝' name='양식'/>
          </div>
          <div className="specialPriceArea">
            <div className="specialPrice">
              <h3 className="specialTitle">특가세일</h3>
            </div>
            <div className="foodinfo-container">
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
            </div>
          </div>
          <div className="recommendArea">
            <div className="recommendPrice">
              <h3 className="recommendTitle">추천매장</h3>
            </div>
            <div className="foodinfo-container">
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
              <Link to="/Details" className="details">
                <Foodinfo picture='logo192.png' store='외할머니댁' food='얼큰 소고기 버섯탕' price='13900원' percent='50%' saleprice='6950원' comments='댓글 31개' />
              </Link>
            </div>
          </div>
        </div>
    );
}

export default Home;