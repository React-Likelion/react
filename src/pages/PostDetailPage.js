import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/pages/PostDetailPage.css';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar';
import DetailRepleBox from '../components/CommunityPage/DetailRepleBox';

const PostDetailPage = () => {

    const {id} = useParams();

    return (
        <section className='PostDetailPage'>
            <Header/>
            <Navbar/>
            <div className='post-detail-container'>
                <div id='post-detail-content'>
                    <div>카테고리</div>
                    <div id='post-detail-writer-box'>
                        <img src='' alt='x'/>
                        <div>이름 <br/>08/13 04:56</div>
                    </div>
                    <div>다들 반가워요 ~~~</div>
                    <div>오늘 퇴직하고 바로 달려와서 가입합니다. <br/>가끔 도망치고 싶었는데, 오늘이 바로 그 날인 듯합니다.</div>
                    <br/><img src='' alt='x'/><br/><br/>
                </div>
                <DetailRepleBox/>
            </div>
        </section>
    );
};

export default PostDetailPage;