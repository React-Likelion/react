import React from "react"
import "../style/components/Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbarcontainer">
                <span className="lecture">강의</span>
                <span className="mentoring">멘토 & 멘티</span>
                <span className="club">동호회</span>
                <span className="community">커뮤니티</span>
                <span className="consulting">컨설팅</span>
                {/* 라우터 파지면 useNavigate 설정하기 */}
                {/* 페이지 넘어갔을 때 밑에 border 고정시키기 */}
            </div>
        </section>
    );
}

export default Navbar;