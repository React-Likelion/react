import React from 'react';

const LectureRight = ({lectureId,lectureTitle,lecturePrice}) => {

    return (
        <div>
            <p>{lectureTitle}</p>
            <p>{lecturePrice}</p>
            <p>{lectureId}</p>
        </div>
    );
};

export default LectureRight;