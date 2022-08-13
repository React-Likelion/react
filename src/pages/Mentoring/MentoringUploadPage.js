import React, { useState } from 'react';
import Header from '../../components/Header.js';
import '../../style/pages/Mentoring/MentoringUploadPage.css';
import ImagePreview from '../../components/ImagePreview.js';
import { useNavigate } from 'react-router-dom';
import { locationData, fieldData, ageData } from '../../data/CategoryData.js';

const MentoringUploadPage = () => {

    const navigate = useNavigate();
    const [images, setImages] = useState();
    const [tag, setTag] = useState('');
    const [clicked, setClicked] = useState([]);

    const [mentoringInfo, setMentoringInfo] = useState({
        location: '',
        title: '',
        description: '',
        field: '',
        age_group: '',
        limit: '', 
        tags: []
    });

    const handleMentoringInfo = (e) => {
        if(e.target.name === 'age_group') {
            const modify = [false, false, false, false];
            modify[e.target.id] = true;
            setClicked(modify);
        } 
        setMentoringInfo({
            ...mentoringInfo,
            [e.target.name]: e.currentTarget.value
        })
    }

    const handleTag = (e) => {
        setTag(e.target.value);
    }

    const submitTag = (e) => {
        if(tag === '') {
            alert("태그를 입력해주세요 !");
        } else if(mentoringInfo.tags.length === 3) {
            alert("태그는 3개까지 가능합니다.");
            setTag('');
            return;
        } else if (tag.length > 10) {
            alert("태그의 최대 길이는 10글자 입니다.");
            setTag('');
            return;
        } else {
            const tagList = mentoringInfo.tags;
            tagList.push(tag);
            setMentoringInfo({
                ...mentoringInfo,
                tags: tagList
            })
            setTag('');
        }
    }

    const deleteTag = (e) => {
        if(window.confirm('태그를 삭제하시겠습니까 ?')) {
            const modifyTag = mentoringInfo.tags;
            modifyTag.splice(e.target.id, 1);
            setMentoringInfo({
                ...mentoringInfo, 
                tags: modifyTag
            })  
        }
    }

    const clickUpload = () => {
        console.log(mentoringInfo);
        if (Object.values(mentoringInfo).includes('')) {
            alert("입력되지 않은 값이 있습니다.");
            return;
        } else if (Number(mentoringInfo.limit) < 3 || isNaN(mentoringInfo.limit)) {
            alert("정원은 3명 이상의 숫자 형태이어야 합니다."); 
        }
        // 멘토링 등록 통신
        
    }

    return (
        <section className='MentoringUploadPage'>
            <Header/>
            <div className='upload-container'>
                <div>멘토링 등록하기</div>
                <div>
                    <div>지역</div>
                    <select onChange={handleMentoringInfo} name='location'>
                        <option value='' defaultValue>선택</option>
                        {locationData.map((ele, idx) => <option key={idx} value={ele}>{ele}</option>)}
                    </select>
                    <div>제목</div>
                    <input type='text' onChange={handleMentoringInfo} name='title'></input>
                    <div>멘토링 설명</div>
                    <input type='text' onChange={handleMentoringInfo} name='description'></input>
                    <div>분야</div>
                    <select onChange={handleMentoringInfo} name='field'>
                        <option value='' defaultValue>선택</option>
                        {fieldData.map((ele, idx) => <option key={idx} value={ele}>{ele}</option>)}
                    </select>
                    <div>연령</div>
                    <div id='age-btn-box'>
                        {ageData.map((ele, idx) => <button className={clicked[idx] ? 'clicked' : 'unclicked'} id={idx} onClick={handleMentoringInfo} value={ele} name='age_group'>{ele}</button>)}
                    </div>
                    <div>정원</div>
                    <input type='text' onChange={handleMentoringInfo} name='limit' placeholder='   3명 이상의 숫자로 입력해주세요.'></input>
                </div>
                <div className='tag-box'>
                    <div>
                        <input placeholder='    #태그를 입력하세요 (10글자 이내)' value={tag} name='tags' onChange={handleTag}/>
                        <button onClick={submitTag}>추가</button>
                    </div>
                    <br/>
                    {
                        mentoringInfo.tags.length === 0 ? 
                        <div className='mentoring-ex-tag'>
                            <div>예) 사업</div>
                            <div>예) 기획</div>
                            <div>예) 창업</div> 
                        </div> : 
                        <div className='mentoring-write-tag'>
                            {mentoringInfo.tags.map((ele, idx) => <div id={idx} onClick={deleteTag}>{ele}</div>)}
                        </div>
                    }
                    <div id='mentoring-tag-box'><div className='mentoring-tag'></div></div>
                </div>
                <ImagePreview text={'대표 사진 첨부하기'} setImages={setImages}/>
                <div className='picture-preview-box'></div>
                <button className='upload-btn' onClick={clickUpload}>등록하기</button>
            </div>
        </section>
    );
};

export default MentoringUploadPage;