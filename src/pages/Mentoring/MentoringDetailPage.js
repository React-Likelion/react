import React from 'react';
import Header from './../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useNavigate } from 'react-router-dom';

const MentoringDetailPage = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header />
            <div className='detailBox'>
                <div id='detailTitleBox'>
                    사업계획서 기획에서 창업 지원사업까지 🚀
                </div>
                <div id='detailImgBox'>
                    <img src='/img/Example.png' alt='이미지'/>
                </div>
                <section className='detailSmallBox'>
                    <div id='detailContentBox'>
                        예비 창업자, 창업에 관심있는 분들~<br />수많은 창업지원사업들을 선별하여 매주 추천해드립니다!!
                    </div>
                    <section className='detailProfileBox'>
                        <div id='profileImg'>
                            <img src='/img/Profile.png' alt='이미지'/>
                            <br/>닉네임
                        </div>
                        <section className='profileDetailBox'>
                            <div id='info'>멤버 2 명 / 정원 5 명</div>
                            <div className='detailTagBox'>
                                <div className='detailTagItem'>사업</div>
                                <div className='detailTagItem'>기획</div>
                                <div className='detailTagItem'>창업</div>
                            </div>
                        </section>
                    </section>
                    <div className='joinBtn' onClick={()=>navigate('/join')}>입장 신청하기</div>
                </section>
            </div>
        </div>
    );
};

export default MentoringDetailPage;