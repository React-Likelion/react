import React, {useState} from 'react';
import "../../style/components/ClubPage/ClubBoard.css"
import ClubArticle from './ClubArticle';
import Pagination from '../Pagenation';

const ClubBoard = ({articleData}) => {
    console.log(articleData)
    const [limit, setLimit] = useState(5); // 한 페이지당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지 설정
    const offset = (page - 1) * limit; // 인덱스

    return (
        <section className='ClubBoard'>
            <div className='clubBoardHeader'>
                <p className='clubBoardTitle'>제목</p>
                <p className='clubBoardWriter'>작성자</p>
                <p className='clubBoardDate'>작성일</p>
            </div>
            {/* 게시글의 갯수만큼 map */}
            {
                articleData.slice(offset, offset + limit).map((item, idx) => <ClubArticle item={item} />)
            }
            <Pagination total={articleData.length} limit={limit} page={page} setPage={setPage} />
        </section>
    );
}

export default ClubBoard;