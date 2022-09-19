import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/components/CommunityPage/CommunityPostItem.css';

const CommunityPostItem = ({ele, num}) => {
    
    const navigate = useNavigate();

    const showDetailPage = (e) => {
        navigate(`/community/${e.currentTarget.id}`);
    }
    
    return (
        <section onClick={showDetailPage} id={ele.id} className='CommunityPostItem'>
            <div>{ele.category}</div>
            <div>{num}</div>
            <div>{ele.title}</div>
            <div>[{ele.comment_cnt}]</div>
            <div>{ele.writer_nickname}</div>
            <div>{ele.create_time && ele.create_time.substr(0, 10)}</div>
        </section>
    );
};

export default CommunityPostItem;