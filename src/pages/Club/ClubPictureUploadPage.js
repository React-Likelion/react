import React, {useState} from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Club/ClubPictureUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';
import { useNavigate } from 'react-router-dom';

const ClubPictureUploadPage = () => {

    const navigate = useNavigate();
    const [images, setImages] = useState();
    
    const [clubImageInfo, setClubImageInfo] = useState({
        title: '',
        image: '',
        club_id: '', // props로 동호회 ID 넘겨주기
        writer_id: ''
    });
    // 한번 쓸때 제목하나 이미지하나 쓰도록 할건지 ?

    return (
        <section className='ClubPictureUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>사진 등록 하기</div>
                <input id='picture-upload-title' placeholder='제목을 입력해주세요'></input>
                <ImagePreview text={'이미지 첨부하기'} setImages={setImages}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn'>등록하기</button>
            </div>
        </section>
    );
};

export default ClubPictureUploadPage;