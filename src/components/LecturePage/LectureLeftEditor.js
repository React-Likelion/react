import React, {useState} from 'react'
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {PROXY} from '../../data/serverUrl.js';
import '../../style/components/LecturePage/LectureLeftEditor.css';
import { lectureCategoryData } from '../../data/lectureCategoryData.js';

// {setDesc, desc, setImage}
const LectureLeftEditor = ({lectureId,titleLecture,lecturePrice,categoryData,detailCategoryData}) => { // (1)

    const imgLink = "http://localhost:3000/images/"
    const [lectureData,setLectureData] = useState({
        'id':lectureId,
        'title':titleLecture,
        'description':'',
        'price':lecturePrice,
        'youtube_link':'',
        'field':categoryData,
        'tag':detailCategoryData,
        'img':'',
    });

    
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
        console.log(lectureData);
        
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
                            const data = new FormData();
                            console.log(file);
                            data.append('file',file);
                            console.log(data);
                            setLectureData({...lectureData,
                                img:data});
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
            data="<p>Hello World</p>"
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