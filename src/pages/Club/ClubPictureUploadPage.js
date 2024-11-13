import React, {useState} from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Club/ClubPictureUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ClubPictureUploadPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const {state} = useLocation();
    const navigate = useNavigate();
    const [images, setImages] = useState();
    
    const [clubImageInfo, setClubImageInfo] = useState({
        title: '',
        club_id: state.club_id, // props로 동호회 ID 넘겨주기
        writer_id: localStorage.getItem('react_userId')
    });

    const handleClubImageInfo = (e) => {
        setClubImageInfo({
            ...clubImageInfo,
            [e.target.name]: e.currentTarget.value
        })
    }
    
    const clickpload = () => {
        if (Object.values(clubImageInfo).includes('')) {
            alert("입력되지 않은 값이 있습니다.");
            return;
        }

        let form_data = new FormData();
        form_data.append('image', images[0]);
        // 나머지 데이터들은 다 JSON으로 맞춰주기
        form_data.append('title', clubImageInfo.title);
        form_data.append('club_id', clubImageInfo.club_id);
        form_data.append('writer_id', clubImageInfo.writer_id);
        
        axios.post(`${PROXY}/clubs/${state.club_id}/galleries/`, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
        .then((res) => {
            console.log(res);
            navigate(`/club/detail/${state.club_id}`);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <section className='ClubPictureUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>사진 등록 하기</div>
                <input id='picture-upload-title' name='title' onChange={handleClubImageInfo} placeholder='제목을 입력해주세요'></input>
                <ImagePreview text={'이미지 첨부하기'} setImages={setImages} imgCnt={1}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn' onClick={clickpload}>등록하기</button>
            </div>
        </section>
    );
};

export default ClubPictureUploadPage;