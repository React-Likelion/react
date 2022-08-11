import React, {useState} from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Community/CommunityUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';
import { useNavigate } from 'react-router-dom';

const CommunityUploadPage = () => {

    const navigate = useNavigate();
    const [images, setImages] = useState();

    return (
        <section className='CommunityUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>게시글 작성하기</div>
                <div>
                    <div>분류</div>
                    <input placeholder='제목을 입력해주세요'></input>
                </div>
                <textarea id='description-textarea' placeholder='본문이나 내용을 입력해주세요'></textarea><br/>
                <ImagePreview text={'이미지 첨부하기'} setImages={setImages}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn'>작성하기</button>
            </div>
        </section>
    );
};

export default CommunityUploadPage;