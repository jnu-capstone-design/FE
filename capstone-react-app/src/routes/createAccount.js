import Header from '../components/header';
import Button from '../components/button';
import './CreateAccount.css';
import { useState } from 'react';

function CreateAccount() {
    const [type, setType] = useState(null);
    const [gender, setGender] = useState(null);

    return (
        <div className="content">
            <Header />
            <div className="submit">
                <h2>회원가입</h2>
                <Button text="등록" />
            </div>
            <div className="input_data">
                <div className="row">
                    <div className="userType">
                        <h4>구분</h4>
                        <button
                            className={type === 'consumer' ? 'active' : ''}
                            onClick={() => setType('consumer')}
                        >
                            구매자
                        </button>
                        <button
                            className={type === 'seller' ? 'active' : ''}
                            onClick={() => setType('seller')}
                        >
                            판매자
                        </button>
                    </div>
                    <div className="userGender">
                        <h4>성별</h4>
                        <button
                            className={gender === 'male' ? 'active' : ''}
                            onClick={() => setGender('male')}
                        >
                            남자
                        </button>
                        <button
                            className={gender === 'female' ? 'active' : ''}
                            onClick={() => setGender('female')}
                        >
                            여자
                        </button>
                    </div>
                </div>
                <div className="row">
                    <label>
                        <input type="text" name="name" placeholder=" " required />
                        <span>이름</span>
                    </label>
                    <label>
                        <input type="text" name="birthdate" placeholder=" " required />
                        <span>생년월일 (예시:1998-08-13)</span>
                    </label>
                </div>
                <div className="row">
                    <label>
                        <input type="text" name="username" placeholder=" " required />
                        <span>아이디</span>
                    </label>
                    <label>
                        <input type="password" name="password" placeholder=" " required />
                        <span>비밀번호</span>
                    </label>
                </div>
                <div className="row">
                    <label>
                        <input type="tel" name="phone" placeholder=" " required />
                        <span>휴대폰 번호</span>
                    </label>
                    <label>
                        <input type="text" name="address" placeholder=" " required />
                        <span>주소</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;