import React, {useState} from 'react'
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PROXY} from '../../data/serverUrl.js';
import '../../style/components/LecturePage/LectureLeftEditor.css';
import { lectureCategoryData } from '../../data/CategoryData.js';

// {setDesc, desc, setImage}
const LectureLeftEditor = ({lectureId,titleLecture,lectureYoutube,lecturePrice,imgSrc,lectureDescription}) => { // (1)
    const dummy = `<img src=${imgSrc} />
    ${lectureDescription}`;
    console.log(titleLecture);
    
    const [lectureData,setLectureData] = useState({
        'id':lectureId,
        'title':titleLecture,
        'description':'',
        'price':lecturePrice,
        'youtube_link':lectureYoutube,
        'field':'',
        'tag':'',
    });
    
    const [imgFile,setImgFile] = useState([]);
    
    const titleHandler = (e)=>{
        setLectureData({...lectureData,
            title:e.target.value});
    };
    const priceHandler = (e)=>{
        setLectureData({...lectureData,
            price:parseInt(e.target.value)});
    };
    const youtubeHandler = (e)=>{
        //재생목록이 맞는지 검사
        setLectureData({...lectureData,
            youtube_link:e.target.value});
    };
    const fieldHandler = (e)=>{
        setLectureData({...lectureData,
            field:e.target.value});
    };
    const tagHandler = (e)=>{
        setLectureData({...lectureData,
            tag:e.target.value});
    };
    const makeTagBox = () => {
        const result = lectureCategoryData[lectureData.field].map((ele, idx) => {
            return <option key={idx} value={ele}>{ele}</option>
        })
        return result;
    };

    const clickModifySubmit = (e)=>{
        
        console.log('수정 제출');
        console.log(imgFile);
        console.log(lectureData);
        let data = new FormData();

        for(let i=0; i<imgFile.length; i++){
            data.append('file',imgFile[i]);
        }
        data.append("data", JSON.stringify(lectureData));
        for (let key of data.keys()) {
            console.log(key);
        }
        for (let value of data.values()) {
            console.log(value);
        }
        // axios.put(`${PROXY}/lectures/${lectureId}/`, data, {
        //     headers: {
        //     'Content-type': 'multipart/form-data'
        //     }
        //     })
        //     .then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => console.log(err))
    };

    const customUploadAdapter = (loader) => { // (2)
        return {
            upload(){
                return new Promise ((resolve, reject) => {
                        loader.file.then( (file) => {
                            console.log(file);
                            setImgFile([
                                ...imgFile,
                                file
                            ]);
                            console.log(imgFile);
                            // resolve({
                            //     default: `${imgLink}/${res.data.filename}`
                            // });
                        })
                })
            }
        }
    }

    function uploadPlugin (editor){ // (3)
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        }
    }
    return (
        <>
            <h2>강의 소개</h2>
            <label>제목 : <input className="title-input" onChange={(titleHandler)} type='text' placeholder='제목' value={lectureData.title} /></label>
            <label>가격 : <input className="title-input" onChange={(priceHandler)} type='text' placeholder='가격' value={lectureData.price} /></label>
            <label>링크 : <input className="title-input" onChange={(youtubeHandler)} type='text' placeholder='유튜브 링크' value={lectureData.youtube_link} /></label>
            <div>카테고리 : </div>
                    <div id='categoryBox'>
                        <select onChange={fieldHandler} name='field'>
                            {Object.keys(lectureCategoryData).map((ele, idx) => {
                                return <option key={idx} value={ele}>{ele}</option>
                            })}
                        </select>
                        {lectureData.field && lectureCategoryData[lectureData.field][0] !== '' ? 
                        <select onChange={tagHandler} name='tag'>
                            {makeTagBox()}
                        </select> : ''}
                    </div>

            <CKEditor
            editor={ClassicEditor}
            config={{ // (4)
                extraPlugins: [uploadPlugin]
            }}
            data={dummy}
            onReady={editor => {
                // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
                const data = editor.getData();
                // setDesc(data);
                // console.log(desc);
                console.log(data);
                setLectureData({...lectureData,
                    description:data});
            }}
            onBlur={(event, editor) => {
                // console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
                // console.log('Focus.', editor);
            }}/>
            <button className="submit-button" onClick={clickModifySubmit}>입력</button>
        </>
    )
}

export default LectureLeftEditor