import React from 'react';
import Header from './../../components/Header';
import Navbar from '../../components/Navbar';
import MentoringBox from './../../components/MentoringPage/MentoringBox';
import '../../style/pages/Mentoring/MentoringPage.css'
import { useNavigate } from 'react-router-dom';
import Filter from './../../components/Filter';


const MentoringPage = () => {
    const navigate = useNavigate();

    const optionList = [
        "인기순", "최신순"
    ]

    const optionHandler = (e) => {

    }

    const onClickBtnHandler = (e) => {
        navigate('upload');
    }
    return (
        <div className='pageAll'>
            <Header />
            <Navbar val={'mentoring'}/>
            <div className='postBtnBox'>
                <div className='postBtn' onClick={onClickBtnHandler}><img src='img/Teacher.png' alt=''/>멘토멘티 등록하기</div>
            </div>
            <div>
                <Filter />
            </div>
            <div className='selectBar'>
                <select onChange={optionHandler} id='selectBox'/*value={option}*/>
                        <option disabled>정렬</option>
                        {
                            optionList.map((op,i) => (
                                <option value={op} key={i}>
                                    {op}
                                </option>
                            ))
                        }
                </select>
            </div>
            <section className='viewSection'>
                <MentoringBox />
            </section>
        </div>
    );
};

export default MentoringPage;