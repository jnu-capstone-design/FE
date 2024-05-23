import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [dropDown, setdropDown]=useState(false);
  const handleMouseEnter=()=>{
    setdropDown(true);
  }
  const handleMouseLeave =()=>{
    setdropDown(false);
  }

  return (
    <header>
      <div className="header">
        <Link to="/">
          <img className="logo" alt="logo not found" src="MainLogo.png"/>
        </Link>
        <Link to="/products" className="products">전체상품</Link>
        <Link to="/surrounds" className="surround">내 주변</Link>
        <Link to="/discount" className="discount">특가세일</Link>
        <div className="search">
          <input className="header_input" type="text"></input>
          <button className="header_button">검색</button>
        </div>
        <div className="profile-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img className="profile" alt="profile not found" src="Profile.png"/>
          {dropDown && (
            <div className="dropdown">
              <Link to="/signUp" className="dropdown-link">로그인</Link>
              <Link to="/CreateAccount" className="dropdown-link">회원가입</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;