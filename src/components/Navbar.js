import React,{useState} from "react"
import "../style/components/Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [toggleLecture,setToggleLecture] = useState(false);

    const clickLecture = ()=>{
        navigate('/lecture');
        setToggleLecture(true);
    };
    
    return (
        <section className="navbar">
            <div className="navbarcontainer">
                <div className={!toggleLecture ?'' : "selectNav" } onClick={clickLecture}>강의</div>
                <div onClick={()=>navigate('/mentoring')}>멘토 & 멘티</div>
                <div onClick={()=>navigate('/club')}>동호회</div>
                <div onClick={()=>navigate('/community')}>커뮤니티</div>
                <div onClick={()=>navigate('/consulting')}>컨설팅</div>
                {/* 라우터 파지면 useNavigate 설정하기 */}
                {/* 페이지 넘어갔을 때 밑에 border 고정시키기 */}
            </div>
        </section>
    );
}

export default Navbar;