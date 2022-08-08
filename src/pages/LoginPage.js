import React,{useState} from 'react';
import '../style/pages/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { PROXY } from '../data/serverUrl';
import axios from 'axios';

const LoginPage = () => {

    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({
        identification:'',
        password:''
    });

    const handleChangeData = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    const handleClickLogin = (e)=>{
        // 로그인 통신
        console.log(loginData);
        axios.post(`${PROXY}/accounts/login/`, loginData)
        .then((res) => {
            console.log(res);
            localStorage.setItem('accessToken',res.data.token.access_token);
            localStorage.setItem('refreshToken',res.data.token.refresh_token);
            localStorage.setItem('nickname',res.data.token.nickname);
            if(localStorage.getItem('accessToken')) {navigate('/');}
        })
        .catch((err) => {
            console.log(err);
            alert("로그인 실패");
        })
    };

    return (
        <section id="login-container">
            <section id="login-left">
                <h1 onClick={() => navigate('/')}>Re:act</h1>
            </section>
            <section id="login-right">
                <div id="login-form">
                    <h1>로그인</h1>
                    <input type="text" onChange={handleChangeData} name='identification' placeholder='   아이디를 입력하세요' /><br />
                    <input type="password" onChange={handleChangeData} name='password' placeholder='   비밀번호를 입력하세요' /><br /><br />
                    <button onClick={handleClickLogin} id="login-btn">로그인하기</button>
                    <div id='go-sign-text'><br/>아직 회원이 아니신가요 ? <span onClick={() => navigate('/signup')}>회원가입 하러가기</span></div>
                </div>
            </section>
        </section>
    );
};

export default LoginPage;