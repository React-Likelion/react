import React from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Lecture/LectureUploadPage.css';

const LectureUploadPage = () => {
    return (
        <section className='LectureUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>영상 업로드</div>
                <div>
                    <div>유튜브 URL</div>
                    <input></input>
                    <div>강의명</div>
                    <input></input>
                    <div>강의 가격</div>
                    <input></input>
                    <div>카테고리</div>
                    <input></input>
                </div>
                <textarea id='description-textarea' placeholder='수업이나 활동 내용 입력'></textarea><br/>
                <button className='picture-upload-btn'>썸네일 첨부하기</button>
                <div className='picture-preview-box'></div>
                <div className='checkbox-text'><input type='checkbox'/>본인의 유튜브 ID를 입력하였음을 확인하였으며, 영상을 비공개로 지정하였음을 확인하였습니다.</div>
                <div className='checkbox-text'><input type='checkbox'/>어겼을 시 법적 책임을 물을 수 있음을 확인하였습니다.</div>
                <button className='upload-btn'>등록하기</button>
            </div>
        </section>
    );
};

export default LectureUploadPage;