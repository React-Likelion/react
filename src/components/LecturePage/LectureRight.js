import React from 'react';

const LectureRight = ({lectureId,lectureTitle,lecturePrice}) => {

    return (
        <div>
            <h3>{lectureTitle}</h3><br/>
            <p>가격 : {lecturePrice} <sub>Point</sub></p>
        </div>
    );
};

export default LectureRight;