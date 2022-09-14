import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import '../../../style/components/CommunityPage/Modal/UpdateModal.css';
import axios from 'axios';
import ImagePreview from '../../ImagePreview';

const UpdateModal = ({show, onHide, info}) => {
    console.log(info);
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    const [images, setImages] = useState('');
    
    const [postInfo, setPostInfo] = useState({
        title: info.title,
        category: info.category,
        description: info.description,
        writer_id: Number(localStorage.getItem('react_userId')),
        writer_nickname: localStorage.getItem('react_nickname')
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
        
        if(!images) {
            alert("사진을 1장 첨부해 주세요.");
            return;
        }

        let form_data = new FormData(); 
        form_data.append('image', images[0]);
        form_data.append('category', postInfo.category ? postInfo.category : info.category);
        form_data.append('title', postInfo.title ? postInfo.title : info.title);
        form_data.append('description', postInfo.description ? postInfo.description : info.description);
        form_data.append('writer_id', postInfo.writer_id);
        form_data.append('writer_nickname', postInfo.writer_nickname);
        
        // 2. axios로 전송
        axios.put(`${PROXY}/communitys/${info.id}/`, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
        .then((res) => {
            navigate('/community');
        })
        .catch((err) => {
            alert("업로드에 실패하였습니다.");
        })
    }


    return (
        <div className='UpdateModal'>
            <Modal centered show={show} onHide={onHide}>
                <Modal.Header>
                    <div></div>
                    <span>게시글 수정하기</span>
                    <div onClick={onHide}>X</div>
                </Modal.Header>
                <Modal.Body>
                    <div className='upload-container'>
                    <select id='update-select'  name='category' onChange={handlePostInfo} defaultValue={postInfo.category}>
                                <option value='' disabled>분류</option>
                                <option value='공지'>공지</option>
                                <option value='자유'>자유</option>
                                <option value='정보'>정보</option>
                    </select>
                    <input id='update-title' placeholder='제목을 입력해주세요' name='title' value={postInfo.title ? postInfo.title : info.title} onChange={handlePostInfo}></input>
                    <textarea id='description-textarea' name='description' value={postInfo.description ? postInfo.description : info.description} onChange={handlePostInfo} placeholder='본문이나 내용을 입력해주세요'></textarea><br/>
                    <ImagePreview text={'이미지 첨부하기'} setImages={setImages} imgCnt={1}/>
                    <div className='picture-preview-box'></div>
                    <button className='upload-btn' onClick={clickPostBtn}>작성하기</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateModal;

