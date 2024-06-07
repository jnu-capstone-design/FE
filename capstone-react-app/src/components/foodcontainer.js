import Foodinfo from './foodInfo';
import { Link } from 'react-router-dom';
import './foodcontainer.css';


const FoodContainer = () => {
  
  return(
    <div className="foodContainer">
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
  );
}

export default FoodContainer;