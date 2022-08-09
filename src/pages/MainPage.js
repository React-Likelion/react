import React from 'react';
import '../style/pages/MainPage.css';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import MainBox from '../components/MainPage/MainBox';
import MainCarousel from '../components/MainPage/MainCarousel';

const MainPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <section className='main-container'>
                {/* 메인 배너 */}
                <MainCarousel/>
                {/* 메인 박스 */}
                <MainBox/>
            </section>
        </>
    );
};

export default MainPage;