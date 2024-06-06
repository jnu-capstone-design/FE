import Header from '../components/header';
import { useState } from 'react';
import './MyPage.css';

function MyPage() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }

  return(
    <div>
      <Header/>
      <div className='userInfo'>
        <div className='userImg'>
          <img className="profile" alt="profile not found" src="Profile.png"/>
        </div>
        <div className='userDetali'>
          <div className='userName'><p>김공감</p></div>
          <div className='userReservation'>
            <h2>예약</h2>
            <h3>0 건</h3>
          </div>
        </div>
      </div>

      <div className='tabs'>
        <div className='blockTab'>
          <div className={toggleState == 1 ? "activeTab" : "inactiveTab"} onClick={() => toggleTab(1)}>Tab1</div>
          <div className={toggleState == 2 ? "activeTab" : "inactiveTab"} onClick={() => toggleTab(2)}>Tab2</div>
          <div className={toggleState == 3 ? "activeTab" : "inactiveTab"} onClick={() => toggleTab(3)}>Tab3</div>
        </div>
        <div className='contentTab'>
          <div className={toggleState == 1 ? "activeContent" : "inactiveContent"}>
            <h1>content1</h1>
          </div>
          <div className={toggleState == 2 ? "activeContent" : "inactiveContent"}>
            <h1>content2</h1>
          </div>
          <div className={toggleState == 3 ? "activeContent" : "inactiveContent"}>
            <h1>content3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;