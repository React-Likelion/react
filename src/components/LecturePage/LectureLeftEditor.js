import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../style/components/LecturePage/LectureLeftEditor.css';

const LectureLeftEditor = ({titleLecture}) => {
    const [lectureData,setLectureData] = useState({
        title:titleLecture,
        content:'',
    });


    const titleHandler = (e)=>{
        setLectureData({...lectureData,
            title:e.target.value});
    };
    const clickModifySubmit = (e)=>{
        console.log('수정 제출');
        console.log(lectureData);
    }

    return (
        <div id="LectureLeftEditor">
            <h2>강의 소개</h2>
            <input className="title-input" onChange={(titleHandler)} type='text' placeholder='제목' value={lectureData.title} />
            <CKEditor
                editor={ ClassicEditor }
                // data부분에 실제 글에 적혀있던 소개글 데이터 받아와서 잘 뿌려주기
                data="<p>나의 강의를 멋지게 소개해보세요!</p>"

                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                //     console.log( 'Editor is ready to use!', editor );
                // } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                    setLectureData({
                        ...lectureData,
                        content:data
                    });
                } }
                // onBlur={ ( event, editor ) => {
                //     console.log( 'Blur.', editor );
                // } }
                // onFocus={ ( event, editor ) => {
                //     console.log( 'Focus.', editor );
                // } }

            />
            <button onClick={clickModifySubmit} className="submit-button">입력</button>
        </div>
    );
};

export default LectureLeftEditor;