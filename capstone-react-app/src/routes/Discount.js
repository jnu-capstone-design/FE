import Header from '../components/header'
import Foodinfo from '../components/foodInfo';
import { Link } from 'react-router-dom';

function discount(){
    return (
        <div>
            <Header />
            <div className='70percentOff'>
                <div className="discountRate">
                    <h1>70%~</h1>
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
                </div>
            </div>
            <div className='50percentOff'>
                <div className="discountRate">
                    <h1>50%~</h1>
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
                </div>
            </div>
            <div className='30percentOff'>
                <div className="discountRate">
                    <h1>30%~</h1>
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
                </div>
            </div>
        </div>
    );
}

export default discount;