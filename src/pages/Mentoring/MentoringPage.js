import React from 'react';
import Header from './../../components/Header';
import '../../style/pages/Mentoring/MentoringPage.css'
import Navbar from '../../components/Navbar';
import MentoringBox from './../../components/MentoringPage/MentoringBox';

const MentoringPage = () => {
    const optionList = [
        "인기순", "최신순"
    ]

    const optionHandler = (e) => {

    }
    return (
        <div>
            <Header />
            <Navbar />
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