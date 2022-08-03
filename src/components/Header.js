import React from 'react';
import {useNavigate} from "react-router-dom"
import "../style/components/Header.css"


const Header = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/login")
    }
    const goSignUp = () => {
        navigate("/signup")
    }
    const goHome = () => {
        navigate("/")
    }

    return (
        <section className='header'>
            <div className='headercontainer'>
                <div className='headerleft'>
                    <span onClick={goHome} className='logo'>Re:act</span>
                </div>
                <div className='headerright'>
                    <span><img src='img/lectureBtn.png' className='lectureBtn' /></span>
                    {/* 라우터 파지면 Link or useNavigate 하기 */}
                    <span onClick={goLogin} className='login'>로그인</span>
                    <span onClick={goSignUp} className='signup'>회원가입</span>
                </div>
            </div>
        </section>
    );
}

export default Header;