import React, {useEffect, useState} from 'react';
import '../../style/components/CommunityPage/CommunityBoard.css';
import CommunityPostItem from './CommunityPostItem';
import Pagination from '../Pagenation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {PROXY} from '../../data/serverUrl';

const CommunityBoard = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]); // axios로 받아와서 설정
    const [notices, setNotices] = useState([]); 
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
        axios.get(`${PROXY}/communitys/?category=${e.target.value}`)
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

    const clickSearchBtn = (e) => {
        // 검색 버튼 눌렀을 때
        let both_data = [];
        if(searchCategory === 'both') {
            const title = axios.get(`${PROXY}/communitys/?title=${searchVal}`)
            .then((res) => {
                setPosts([...posts, res.data]);
            })
            .catch((err) => {
                console.log(err);
            })

            title.then(
                axios.get(`${PROXY}/communitys/?description=${searchVal}`)
                .then((res) => {
                    setPosts([...posts, res.data]);
                })
                .catch((err) => {
                    console.log(err);
                })
            )
        }
        else {
            axios.get(`${PROXY}/communitys/?${searchCategory}=${searchVal}`)
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
        axios.get(`${PROXY}/communitys/`)
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
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
                <Pagination total={posts.length} limit={limit}
                    page={page} setPage={setPage} />
                {localStorage.getItem('react_accessToken') && <div className='postBtn' onClick={uploadPostBtn}><img src='img/Teacher.png' alt=''/>게시글 등록하기</div>}
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
    );
};

export default CommunityBoard;