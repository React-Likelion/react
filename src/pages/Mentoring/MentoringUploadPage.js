import React from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Mentoring/MentoringUploadPage.css';

const MentoringUploadPage = () => {
    return (
        <section className='MentoringUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>멘토링 등록하기</div>
                <div>
                    <div>지역</div>
                    <input></input>
                    <div>제목</div>
                    <input></input>
                    <div>멘토링 설명</div>
                    <input></input>
                    <div>분야</div>
                    <input></input>
                    <div>연령</div>
                    <input></input>
                    <div>정원</div>
                    <input></input>
                </div>
                <div className='tag-box'>
                    <input placeholder='#태그를 입력하세요'/><br/>
                    <div className='mentoring-ex-tag'>
                        <div>예) 사업</div>
                        <div>예) 기획</div>
                        <div>예) 창업</div>
                    </div>
                    <div id='mentoring-tag-box'><div className='mentoring-tag'></div></div>
                </div>
                <button className='picture-upload-btn'>대표사진 첨부하기</button>
                <div className='picture-preview-box'></div>
                <button className='upload-btn'>등록하기</button>
            </div>
        </section>
    );
};

export default MentoringUploadPage;