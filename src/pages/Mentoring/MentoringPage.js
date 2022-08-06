import React from 'react';
import Header from './../../components/Header';
import Navbar from '../../components/Navbar';
import MentoringBox from './../../components/MentoringPage/MentoringBox';
import '../../style/pages/Mentoring/MentoringPage.css'
import { useNavigate } from 'react-router-dom';


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
        <div>
            <Header />
            <Navbar />
            <div className='postBtnBox'>
                <div className='postBtn' onClick={onClickBtnHandler}><img src='img/Teacher.png' alt=''/>멘토멘티 등록하기</div>
            </div>
            <div style={{border:'2px solid red'}}>
                필터링 박스
            </div>
            <div className='selectBar'>
                <select onChange={optionHandler} /*value={option}*/>
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