import Header from '../components/header';

function MyPage() {
  return(
    <div>
      <Header/>
      <div className='userInfo'>
        <img className="profile" alt="profile not found" src="Profile.png"/>
        <p className='userName'>김공감</p>
        <h2>예약</h2>
        <h4>0 건</h4>
      </div>
      <div className='tabMenu'>

      </div>
    </div>
  );
}

export default MyPage;