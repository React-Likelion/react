import React from 'react';
import '../style/pages/MainPage.css';
import Header from './../components/Header';
import Navbar from './../components/Navbar';
import MainBox from '../components/MainPage/MainBox';
import Product from '../components/MainPage/Carousel';

const MainPage = () => {
    return (
        <>
            <Header />
            <Navbar />
            <section className='main-container'>
                {/* 메인 배너 */}
                <Product/>
                <article id='main-banner'>
                    {/* <div>Re:act<br/><span>제2의 삶을 응원합니다</span></div>
                    <div>
                        다시 시작한다면 나에게는 어떤 분야가 맞을까 ?
                        <div><img src='/img/arrow.png'/>지금 바로 테스트하러 가기</div>
                    </div> */}
                </article>
                {/* 메인 박스 */}
                <MainBox/>
            </section>
        </>
    );
};

export default MainPage;