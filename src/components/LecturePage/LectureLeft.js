import React from 'react';
import '../../style/components/LecturePage/LectureLeft.css';
import LectureLeftEditor from './LectureLeftEditor';

const LectureLeft = ({lectureImg,classModify,lectureTitle}) => {
    console.log(classModify);
    return (
        <div id="LectureLeftDiv">
            {
                (classModify)?
                <LectureLeftEditor titleLecture={lectureTitle} />:
                <img src={lectureImg} alt="강의 이미지" />
            }
        </div>
    );
};

export default LectureLeft;