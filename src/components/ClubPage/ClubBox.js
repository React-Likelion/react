import React from 'react';
import "../../style/components/ClubPage/ClubBox.css"
import ClubItem from './ClubItem';

const ClubBox = ({dummyData}) => {
    return (
        <section className='clubBox'>
            <ClubItem dummyData={dummyData} />
            <ClubItem dummyData={dummyData}  />
            <ClubItem dummyData={dummyData}  />
        </section>
    );
}

export default ClubBox;