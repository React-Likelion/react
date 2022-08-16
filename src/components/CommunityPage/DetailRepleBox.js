import React from 'react';
import '../../style/components/CommunityPage/DetailRepleBox.css';
import DetailRepleItem from './DetailRepleItem';

const DetailRepleBox = () => {
    return (
        <section id='DetailRepleBox'>
            <div>
                댓글 <img src={`${process.env.PUBLIC_URL}/img/chat.png`} /> 
                17
            </div>
            <DetailRepleItem/>
            <DetailRepleItem/>
            <DetailRepleItem/>
            <DetailRepleItem/>
            <DetailRepleItem/>
        </section>
    );
};

export default DetailRepleBox;