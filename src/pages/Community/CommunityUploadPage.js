import React, {useState} from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Community/CommunityUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {PROXY} from '../../data/serverUrl.js';

const CommunityUploadPage = () => {

    const navigate = useNavigate();
    const [images, setImages] = useState();
    
    const [postInfo, setPostInfo] = useState({
        title: '',
        option: '',
        description: ''
    })

    const handlePostInfo = (e) => {
        setPostInfo({
            ...postInfo,
            [e.target.name] : e.target.value
        })
    }

    const clickPostBtn = () => {
        console.log(postInfo);
        if (Object.values(postInfo).includes('')) {
            alert("입력되지 않은 값이 있습니다.");
            return;
        }

        let form_data = new FormData();
        form_data.append('image', images[0]);
        form_data.append('option', postInfo.option);
        form_data.append('title', postInfo.title);
        form_data.append('description', postInfo.description);
        
        // 2. axios로 전송
        // axios.post(`${PROXY}/community/`, form_data, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //       'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
        //     }
        // })
        // .then((res) => {
        //     console.log(res);
        //     navigate('/community');
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }



    return (
        <section className='CommunityUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>게시글 작성하기</div>
                <div>
                    <select name='option' onChange={handlePostInfo} defaultValue=''>
                            <option value='' disabled>분류</option>
                            <option value='공지'>공지</option>
                            <option value='자유'>자유</option>
                            <option value='정보'>정보</option>
                    </select>
                    <input placeholder='제목을 입력해주세요' name='title' value={postInfo.title} onChange={handlePostInfo}></input>
                </div>
                <textarea id='description-textarea' name='description' value={postInfo.description} onChange={handlePostInfo} placeholder='본문이나 내용을 입력해주세요'></textarea><br/>
                <ImagePreview text={'이미지 첨부하기'} setImages={setImages}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn' onClick={clickPostBtn}>작성하기</button>
            </div>
        </section>
    );
};

export default CommunityUploadPage;