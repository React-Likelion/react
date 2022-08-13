import React from 'react';
import Header from './../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useNavigate } from 'react-router-dom';

const MentoringDetailPage = () => {
    const navigate = useNavigate();
    //먼저 멘토멘티 리스트 받아오기
    // axios.get(`/mentorings/${id}`)
    //     .then(response=>{
    //         if(response.data.success){
    //             setmentoringList()//가져온 모든 리스트를 배열에 저장한다. 
    //         }else{
    //             alert('멘토링 리스트를 가져오는데 실패했습니다.')
    //         }
    //     })
    const id = 1;
    return (
        <div>
            <Header />
            <div className='detailBox'>
                <div id='detailTitleBox'>
                    사업계획서 기획에서 창업 지원사업까지 🚀
                    {/* {title} */}
                </div>
                <div id='detailImgBox'>
                    <img src='/img/Example.png' alt='이미지' />
                </div>
                <section className='detailSmallBox'>
                    <div id='detailContentBox'>
                        예비 창업자, 창업에 관심있는 분들~
                        수많은 창업지원사업들을 선별하여 매주 추천해드립니다!!
                        {/* {descroption} */}
                    </div>
                    <section className='detailProfileBox'>
                        <div id='profileImg'>
                            <img src='/img/Profile.png' alt='이미지' />
                            <br />닉네임
                        </div>
                        <section className='profileDetailBox'>
                            <div id='info'>멤버 2 명 / 정원 5 명 {/* 멤버{member_cnt}명/정원{limit}명 */}</div>
                            <div className='detailTagBox'>
                                <div className='detailTagItem'>사업{/* {tag} */}</div>
                                <div className='detailTagItem'>기획</div>
                                <div className='detailTagItem'>창업</div>
                            </div>
                        </section>
                    </section>
                    <div className='joinBtn' onClick={() => navigate(`room/${id}`)}>입장 신청하기</div>
                </section>
            </div>
        </div>
    );
};

export default MentoringDetailPage;

