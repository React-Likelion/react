import React from 'react';
import '../../style/components/LecturePage/LectureLeft.css';
import LectureLeftEditor from './LectureLeftEditor';
import { PROXY } from '../../data/serverUrl';

const LectureLeft = ({lectureId,lectureImg,classModify,lectureYoutube,lectureTitle,lecturePrice,lectureDescription}) => {
    console.log(classModify);
    console.log(lectureId);

    const imgSrc = `${PROXY}${lectureImg}`;

    return (
        <div id="LectureLeftDiv">
            {
                (classModify)?
                <LectureLeftEditor imgSrc={imgSrc} lectureYoutube={lectureYoutube} lectureId={lectureId} titleLecture={lectureTitle} lecturePrice={lecturePrice} lectureDescription={lectureDescription}/>:
                <>
                    <img src={imgSrc} alt="강의 이미지" />
                    <p>{lectureDescription}</p>
                </>
            }
            
        </div>
    );
};

export default LectureLeft;