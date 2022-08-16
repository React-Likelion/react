import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/components/CommunityPage/CommunityPostItem.css';

const CommunityPostItem = ({ele}) => {

    const navigate = useNavigate();

    const showDetailPage = (e) => {
        navigate(`/community/${e.target.id}`);
    }

    return (
        <section onClick={showDetailPage} id={ele.id} className='CommunityPostItem'>
            <div>분야</div>
            <div>1</div>
            <div>{ele.title}</div>
            <div>[1]</div>
            <div>{ele.writer}</div>
            <div>{ele.date}</div>
        </section>
    );
};

export default CommunityPostItem;