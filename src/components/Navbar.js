import React, { useEffect, useRef, useState } from "react"
import "../style/components/Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = ({val}) => {
    const navigate = useNavigate();
    const [ category, setCategory ] = useState({
        'lecture': false, 
        'mentoring': false, 
        'club': false, 
        'community': false, 
        'consulting': false
    });

    useEffect(() => {
        setCategory({
            ...category,
            [`${val}`]: true
        });
    }, []);
    
    return (
        <section className="navbar">
            <div className="navbarcontainer">
                <div className={category.lecture ? 'selectNav' : ''} onClick={()=>navigate('/lecture')}>강의</div>
                <div className={category.mentoring ? 'selectNav' : ''} onClick={()=>navigate('/mentoring')}>멘토링</div>
                <div className={category.club ? 'selectNav' : ''} onClick={()=>navigate('/club')}>동호회</div>
                <div className={category.community ? 'selectNav' : ''} onClick={()=>navigate('/community')}>커뮤니티</div>
                <div className={category.consulting ? 'selectNav' : ''} onClick={()=>navigate('/consulting')}>컨설팅</div>
                {/* 라우터 파지면 useNavigate 설정하기 */}
                {/* 페이지 넘어갔을 때 밑에 border 고정시키기 */}
            </div>
        </section>
    );
}

export default Navbar;