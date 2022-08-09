import React from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Club/ClubPictureUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';

const ClubPictureUploadPage = () => {
    return (
        <section className='ClubPictureUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>사진 등록 하기</div>
                <input id='picture-upload-title' placeholder='제목을 입력해주세요'></input>
                <ImagePreview text={'이미지 첨부하기'}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn'>등록하기</button>
            </div>
        </section>
    );
};

export default ClubPictureUploadPage;