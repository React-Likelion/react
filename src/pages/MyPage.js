import React from 'react';
import '../style/pages/MyPage.css';
import Header from './../components/Header';
import Footer from '../components/Footer.js';

const MyPage = () => {
    return (
        <>
            <Header />
            <section className='my-container'>
                <article id='left-side'>
                    <img src='' alt='이미지 없음'/>
                    <div>사용자</div>
                    <div>카테고리</div>
                </article>
                <article id='right-side'>
                    <div>수강중인 강의</div>
                </article>
            </section>
            <Footer/>
        </>
    );
};

export default MyPage;