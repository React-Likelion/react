import React, {useState} from 'react';
import Header from '../../components/Header.js';
import { useNavigate } from 'react-router-dom';
import '../../style/pages/Lecture/LectureUploadPage.css';
import { lectureCategoryData } from '../../data/lectureCategoryData.js';
import ImagePreview from '../../components/ImagePreview.js';

const LectureUploadPage = () => {

    const navigate = useNavigate();
    const [lectureInfo, setLectureInfo] = useState({
        youtube_link : '',
        title : '',
        price : 0,
        field : '',
        tag : '',
        description : '',
    });

    const handleLectureInfo = (e) => {
        setLectureInfo({
            ...lectureInfo,
            [e.target.name]: e.target.value,
        })
    }

    const makeTagBox = () => {
        const result = lectureCategoryData[lectureInfo.field].map((ele, idx) => {
            return <option key={idx} value={ele}>{ele}</option>
        })
        return result;
    }

    const clickUpload = () => {
        // 등록 로직 처리
        
    }

    return (
        <section className='LectureUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>영상 업로드</div>
                <div>
                    <div>유튜브 URL</div>
                    <input type='text' onChange={handleLectureInfo} name='youtube_link'></input>
                    <div>강의명</div>
                    <input type='text' onChange={handleLectureInfo} name='title'></input>
                    <div>강의 가격</div>
                    <input type='text' onChange={handleLectureInfo} name='price'></input>
                    <div>카테고리</div>
                    <div id='lecture-select-box'>
                        <select onChange={handleLectureInfo} name='field'>
                            {Object.keys(lectureCategoryData).map((ele, idx) => {
                                return <option key={idx} value={ele}>{ele}</option>
                            })}
                        </select>
                        {lectureInfo.field && lectureCategoryData[lectureInfo.field][0] !== '' ? 
                        <select onChange={handleLectureInfo} name='tag'>
                            {makeTagBox()}
                        </select> : ''}
                    </div>
                </div>
                <textarea id='description-textarea' 
                    onChange={handleLectureInfo} name='description'
                    placeholder='수업이나 활동 내용 입력'></textarea><br/>
                    <ImagePreview text={'썸네일 첨부하기'}/>
                <div className='picture-preview-box'></div>
                <div className='checkbox-text'><input type='checkbox'/>본인의 유튜브 ID를 입력하였음을 확인하였으며, 영상을 비공개로 지정하였음을 확인하였습니다.</div>
                <div className='checkbox-text'><input type='checkbox'/>어겼을 시 법적 책임을 물을 수 있음을 확인하였습니다.</div>
                <button onClick={clickUpload} className='upload-btn'>등록하기</button>
            </div>
        </section>
    );
};

export default LectureUploadPage;