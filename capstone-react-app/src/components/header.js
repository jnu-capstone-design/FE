import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header">
        <img className="logo" alt="logo not found" src="logo192.png"/>
        <div className="products">전체상품</div>
        <div className="surround">내 주변</div>
        <div className="discount">특가세일</div>
        <div className="search">
          <input type="text"></input>
          <button>검색</button>
        </div>
        <img className="profile" alt="profile not found" src=""/>
      </div>
    </header>
  );
}

export default Header;