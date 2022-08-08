import React from 'react';
import "../../style/components/ClubPage/ClubBoard.css"
import ClubArticle from './ClubArticle';

const ClubBoard = () => {
    return (
        <section>
            {/* 게시글의 갯수만큼 map */}
            <ClubArticle />
        </section>
    );
}

export default ClubBoard;