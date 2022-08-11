import React from 'react';
import '../../style/components/LecturePage/LectureLeft.css';
import LectureLeftEditor from './LectureLeftEditor';

const LectureLeft = ({lectureId,lectureImg,classModify,lectureTitle,lecturePrice,categoryData,detailCategoryData}) => {
    console.log(classModify);
    console.log(lectureId);
    return (
        <div id="LectureLeftDiv">
            {
                (classModify)?
                <LectureLeftEditor lectureId={lectureId} titleLecture={lectureTitle} lecturePrice={lecturePrice} categoryData={categoryData} detailCategoryData={detailCategoryData} />:
                <img src={lectureImg} alt="강의 이미지" />
            }
        </div>
    );
};

export default LectureLeft;