import React from 'react';
import { useNavigate } from 'react-router-dom';



function MentoringInfo({id, image, title, description, tag, limit, member_cnt}) {
    const navigate = useNavigate();

    return (
        <div className='detailBox'>
            <div id='detailTitleBox'>{title}</div>
            <div id='detailImgBox'>
                <img src='/img/Example.png' alt='이미지'/>
            </div>
            <section className='detailSmallBox'>
                <div id='detailContentBox'>{description}</div>
                <section className='detailProfileBox'>
                    <div id='profileImg'>
                        <img src='/img/Profile.png' alt='이미지'/>
                        <br/>닉네임
                    </div>
                    <section className='profileDetailBox'>
                        <div id='info'>멤버{member_cnt}명/정원{limit}명</div>
                        <div className='detailTagBox'>
                            <div className='detailTagItem'>{tag}</div>
                            <div className='detailTagItem'>{tag}</div>
                            <div className='detailTagItem'>{tag}</div>
                        </div>
                    </section>
                </section>
                <div className='joinBtn' onClick={()=>navigate(`chating/${id}`)}>입장 신청하기</div>
            </section>
        </div>
    );
}

export default MentoringInfo;