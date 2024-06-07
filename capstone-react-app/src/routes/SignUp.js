import Header from '../components/header';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp(){
    return (
        <div>
            <Header />
            <div className="login_section">
                <Link to="/">
                    <img className="logo" alt="logo not found" src="MainLogo.png"/>
                </Link>
                <label>
                    <input type="text" name="id" placeholder=" " required />
                    <span>📧아이디를 입력해주세요</span>
                </label>
                <label>
                    <input type="password" name="pw" placeholder=" " required />
                    <span>🔒비밀번호를 입력해주세요</span>
                </label>
                <button className='loginButton'>로그인</button>
                <button className='goToCA'>회원가입</button>
            </div>
        </div>
    );
}
// 버튼 컴포넌트 활용 안함

export default SignUp;
