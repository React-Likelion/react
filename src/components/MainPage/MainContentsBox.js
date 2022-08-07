import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/components/MainPage/MainContentsBox.css';
import MainContentsItem from './MainContentsItem.js';

const MainContentsBox = ({category}) => {
    const navigate = useNavigate();

    const categoryText = {
        'lecture': '인기 강의',
        'mentoring': '멘토멘티',
        'club': '최근 개설 동호회',
        'community': '커뮤니티'
    }

    // 더보기 버튼 눌렀을 때 정보 불러오기
    const handleClickMoreInfo = (e) => {
        navigate(`/${e.target.value}`);
    }

    return (
        <section id='main-contents-box'>
            <div>
                <span>{categoryText[category]}</span>
                <button value={category} onClick={handleClickMoreInfo}>더보기 +</button>
            </div>
            <div id='bottom-box'></div>
            <MainContentsItem category={category}/>
        </section>
    );
};

export default MainContentsBox;