import React, {useEffect, useState} from 'react';
import '../../style/components/CommunityPage/CommunityBoard.css';
import CommunityPostItem from './CommunityPostItem';
import Pagination from '../Pagenation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const CommunityBoard = () => {
    const PROXY = process.env.REACT_APP_PROXY;

    const isTablet = useMediaQuery({
        query: "(min-width:600px) and (max-width:1024px)",
      });

     const isMobile = useMediaQuery({
        query: "(min-width:350px) and (max-width:599px)",
      });
    
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // axios로 받아와서 설정
    const [notices, setNotices] = useState([]);
    // const postCnt = isMobile ? 100 : 5; 
    const [limit, setLimit] = useState(5); // 한 페이지당 보여줄 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지 설정
    const offset = (page - 1) * limit; // 인덱스
    const [searchVal, setSearchVal] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const uploadPostBtn = () => {
        navigate('/community/upload');
    }

    const handleSearchVal = (e) => {
        setSearchVal(e.target.value);
    }

    const handleCategory = (e) => {
        axios.get(`${PROXY}/community/?category=${e.target.value}`)
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleSearchCategory = (e) => {
        setSearchCategory(e.target.value);
    }


    const searchBoth = async () => {
        try {
            const res = await axios.get(`${PROXY}/community/?title=${searchVal}`)
            const data = res.data;

            const res2 = await axios.get(`${PROXY}/community/?description=${searchVal}`)
            
            const bothData = [...data, ...res2.data].filter(
                (arr, idx, cb) => idx === cb.findIndex(t => t.id === arr.id)
            );
                
            setPosts(bothData);

        } catch(err){
            console.log(err);
        }
    }

    const clickSearchBtn = (e) => {
        // 검색 버튼 눌렀을 때
        if(searchCategory === 'both') {
            searchBoth();
        }
        else {
            axios.get(`${PROXY}/community/?${searchCategory}=${searchVal}`)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        
        setSearchVal('');
        setSearchCategory('');
    }

    // 게시물 조회
    useEffect(() => {
        axios.get(`${PROXY}/community/`)
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
        { 
            isMobile && 
            <>
                <div id='top-blank'> </div>
                <div id='top-btn' className='postBtn' onClick={uploadPostBtn}><img src='img/writing.png' alt=''/></div>
            </>
        }
        <section className='CommunityBoard'>
            <article id='community-header'>
                <div>
                    <select onChange={handleCategory} defaultValue="" >
                        <option value="" >전체</option>
                        <option value="공지" >공지</option>
                        <option value="정보" >정보</option>
                        <option value="자유" >자유</option>
                    </select>
                </div>
                <div>제목</div>
                <div>작성자</div>
                <div>작성일</div>
            </article>
            <article id='community-body'>
                {
                    posts.length === 0 && <div id='nodata'>게시물이 없습니다 !</div>
                }
                {
                    // 공지 데이터 매핑
                }
                {
                    posts && posts.slice(offset, offset + limit).map((ele, idx) => 
                        <CommunityPostItem ele={ele} key={idx} num={idx+1+offset} />)
                }
            </article>
            <article id='community-pagenation'>
                <div></div>
                {
                    isMobile || 
                    <Pagination total={posts.length} limit={limit}
                        page={page} setPage={setPage} />
                }
                {localStorage.getItem('react_accessToken') && !isMobile && <div className='postBtn' onClick={uploadPostBtn}><img src='img/writing.png' alt=''/>{isTablet ? '작성' : '게시글 작성하기'}</div>}
            </article>
            <article id='community-searchbar'>
                <select onChange={handleSearchCategory} defaultValue=''>
                    <option value='' disabled>분류</option>
                    <option value='title'>제목</option>
                    <option value='description'>내용</option>
                    <option value='both'>제목+내용</option>
                </select>
                <input type='text' value={searchVal} onChange={handleSearchVal} placeholder='검색어를 입력해주세요'/>
                <button onClick={clickSearchBtn}>검색</button>
            </article>
        </section>
        </>
    );
};

export default CommunityBoard;