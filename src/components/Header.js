import React from 'react';
import {useNavigate} from "react-router-dom"
import "../style/components/Header.css"

const Header = () => {
    const navigate = useNavigate();
    
    const goUpload = () => {
        navigate('/lecture/upload')
    }
    const goLogin = () => {
        navigate("/login")
    }
    const goSignUp = () => {
        navigate("/signup")
    }
    const goHome = () => {
        navigate("/")
    }
    const goLogout = () => {
        // 로그아웃 통신 추가
        localStorage.removeItem('react_accessToken');
        localStorage.removeItem('react_refreshToken');
        localStorage.removeItem('react_userId');
        localStorage.removeItem('react_email');
        localStorage.removeItem('react_nickname');
        navigate("/");
    }
    const goMypage = () => {
        navigate("/my")
    }

    return (
        <section className='header'>
            <div className='headercontainer'>
                <div className='headerleft'>
                    <div id="react_logo_original">
                    <img onClick={goHome} className='logo' src={`${process.env.PUBLIC_URL}/img/react_logo.png`}
                    />
                    </div>
                    <div id="react_logo_min">
                    <img onClick={goHome} className='logo' src={`${process.env.PUBLIC_URL}/img/react_logo_hourglass.png`}
                    /></div>
                </div>
                <div className='headerright'>
                    {/* 라우터 파지면 Link or useNavigate 하기 */}
                    {
                        localStorage.getItem('react_accessToken') ?
                        <>
                            <span onClick={goUpload}><img src={`${process.env.PUBLIC_URL}/img/lectureBtn.png`} 
                                    className='lectureBtn' /></span>
                            <span onClick={goLogout} className='user-text'>로그아웃</span>
                            <span onClick={goMypage} id='my' className='user-text'>마이페이지</span>
                        </> :
                        <>
                            <span onClick={goLogin} className='user-text'>로그인</span>
                            <span onClick={goSignUp} className='user-text'>회원가입</span>
                        </>
                    }
                    
                </div>
            </div>
        </section>
    );
}

export default Header;