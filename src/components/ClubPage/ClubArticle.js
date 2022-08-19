import React from 'react';
import "../../style/components/ClubPage/ClubArticle.css"
import { useNavigate } from 'react-router-dom';

const ClubArticle = ({item}) => {
    console.log(item)
    const navigate = useNavigate();

    const goArticleDetail = () => {
        navigate(`article/${item.id}`, {state : {
            content : item
        }})
    }

    return (
        <section>
            <div className='clubArticle' onClick={goArticleDetail}>
                <div className='clubArticleTitle'>
                    <p className='clubArticleTitleNum'>{item.id}</p>
                    <p className='clubArticleTitleContentBox'>
                        <p className='clubArticleTitleContent'>{item.title}</p>
                        <p className='clubArticleTitleComment'>[{item.comment_cnt}]</p>
                    </p>
                </div>
                <p className='clubArticleWriter'>{item.writer_nickname}</p>
                <p className='clubArticleDate'>{item.create_time.slice(0, 9)}</p>
            </div>
        </section>
        // 페이지 네이션 구현해야함
    );
}

export default ClubArticle;