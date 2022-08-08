import React from 'react';
import Filter from '../../components/Filter';
import ClubBox from "../../components/ClubPage/ClubBox"
import "../../style/pages/Club/ClubPage.css"
import Header from './../../components/Header';
import Navbar from './../../components/Navbar';
import {useNavigate} from 'react-router-dom';

const ClubPage = () => {
    const navigate = useNavigate();

    const dummyData = {
        id: 1,
        name: "골프 동호회",
        location: "구미 옥계동",
        members: 5,
        img: "/img/lectureBtn"
    }
    
    const onClickBtnHandler = (e) => {
        navigate('upload');
    }

    return (
        <section>
            <Header/>
            <Navbar/>
            <div className='postBtnBox'>
                <div className='postBtn' onClick={onClickBtnHandler}><img src='img/Teacher.png' alt=''/>동호회 등록하기</div>
            </div>
            <Filter/>
            <div className='clubPageContent'>
                <div className='sortBtn'>
                    <select>
                        <option>최신순</option>
                        <option>인기순</option>
                    </select>
                </div>
                <ClubBox dummyData={dummyData}/>
            </div>
        </section>
    );
};

export default ClubPage;