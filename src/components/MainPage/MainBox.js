import React from 'react';
import '../../style/components/MainPage/MainBox.css';
import MainContentsBox from './MainContentsBox';

const MainBox = () => {
    const categoryList = ['lecture', 'mentoring', 'club', 'community'];
    return (
        <section id='main-box'>
        {
            categoryList.map((ele) => {
                return <MainContentsBox category={ele}/>
            })
        }
        </section>
    );
};

export default MainBox;