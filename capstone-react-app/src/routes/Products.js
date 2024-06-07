import Header from '../components/header';
import SortButton from '../components/sortBtn';
import FoodContainer from '../components/foodcontainer';
import { useState } from 'react';
import './Products.css';

function Products(){
    const [activeIndex, setActiveIndex] = useState(null);

    const tabClickHandler = (index) => {
        setActiveIndex(index);
    };

    const tabs = [
        '한식', '버거', '중식', '치킨', '돈까스/일식', '카페/디저트',
        '피자', '찜/탕', '분식', '샐러드', '족발/보쌈', '양식'
    ];
    
    const tabContents = tabs.map((tab, i) => <FoodContainer/>);

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
                    {/* 전체상품 */}
                    {activeIndex == null ? <FoodContainer/> : null}
                </div>
            </div>
        </div>
    );
}

export default Products;