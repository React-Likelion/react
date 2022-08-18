import React from 'react';
import "../../style/components/ClubPage/ClubBoard.css"
import ClubArticle from './ClubArticle';

const ClubBoard = ({articleData}) => {
    return (
        <section className='ClubBoard'>
            <div className='clubBoardHeader'>
                <p className='clubBoardTitle'>제목</p>
                <p className='clubBoardWriter'>작성자</p>
                <p className='clubBoardDate'>작성일</p>
            </div>
            {/* 게시글의 갯수만큼 map */}
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
            <ClubArticle />
        </section>
    );
}

export default ClubBoard;