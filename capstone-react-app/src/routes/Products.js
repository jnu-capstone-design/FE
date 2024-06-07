import Header from '../components/header';
import SortButton from '../components/sortBtn';
import Foodinfo from '../components/foodInfo';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Products.css';

function Products(){
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler = (index) => {
        setActiveIndex(index);
    };

    const tabs = [
        '한식', '버거', '중식', '치킨', '돈까스/일식', '카페/디저트',
        '피자', '찜/탕', '분식', '샐러드', '족발/보쌈', '양식'
    ];
    
    const tabContents = tabs.map((tab, i) => '여기에 ' + tab + '의 내용을 작성합니다.');

    return(
        <div>
            <Header />
            <div className='userControl'>
                <div className='tabs'>
                    <ul className='tab-item'>
                        {tabs.slice(0, 6).map((tab, index) => (
                            <li key={index} className={activeIndex === index ? "is-active" : ""} onClick={() => tabClickHandler(index)}>
                                <div>{tab}</div>
                            </li>
                        ))}
                    </ul>
                    <ul className='tab-item'>
                        {tabs.slice(6).map((tab, index) => (
                            <li key={index + 6} className={activeIndex === index + 6 ? "is-active" : ""} onClick={() => tabClickHandler(index + 6)}>
                                <div>{tab}</div>
                            </li>
                        ))}
                    </ul>
                    <div className='Sort'>
                        <SortButton text="기본 순" />
                        <SortButton text="낮은 가격 순" />
                        <SortButton text="높은 할인율 순" />
                        <SortButton text="리뷰 많은 순" />
                    </div>
                    <div className='tab-content'>
                        {tabContents.map((content, index) => (
                            activeIndex === index && (
                                <div key={index}>
                                    <h2>{tabs[index]}</h2>
                                    <p>{content}</p>
                                </div>
                            )
                        ))}
                    </div>
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

export default Products;