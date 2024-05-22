import Header from '../components/header';
import CategoryBtn from '../components/categoryButton';
import SortButton from '../components/sortBtn';
import Foodinfo from '../components/foodInfo';
import { Link } from 'react-router-dom';
import './Products.css';

function products(){
    return(
        <div>
            <Header />
            <div className='userControl'>
                <div className="buttonSection">
                    <CategoryBtn text="한식"/>
                    <CategoryBtn text="버거"/>
                    <CategoryBtn text="중식"/>
                    <CategoryBtn text="치킨"/>
                    <CategoryBtn text="돈까스/일식"/>
                    <CategoryBtn text="카페/디저트"/>
                    <CategoryBtn text="피자"/>
                    <CategoryBtn text="찜/탕"/>
                    <CategoryBtn text="분식"/>
                    <CategoryBtn text="샐러드"/>
                    <CategoryBtn text="족발/보쌈"/>
                    <CategoryBtn text="양식"/>
                </div>
                <div className='Sort'>
                    <SortButton text="기본 순" />
                    <SortButton text="낮은 가격 순" />
                    <SortButton text="높은 할인율 순" />
                    <SortButton text="리뷰 많은 순" />
                </div>
            </div>
            <div className='ProductSection'>
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
    );
}

export default products;