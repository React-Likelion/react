import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../style/pages/Club/ClubArticleDetailPage.css"
import Header from '../../components/Header.js';
import Navbar from '../../components/Navbar';
import ClubArticleRepleBox from '../../components/ClubPage/ClubArticleRepleBox';
import axios from 'axios';
// import { PROXY } from '../data/serverUrl';
import { useNavigate, useLocation } from 'react-router-dom';

const ClubArticleDetailPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.content)
    const [detailInfo, setDetailInfo] = useState({});
    const [profileImg, setProfileImg] = useState('');

    // 게시물 수정
    const clickModify = (e) => {
        if(window.confirm('해당 글을 수정하시겠습니까 ?')) {
            // 수정
        }
    }

    // 게시물 삭제
    const clickDelete = (e) => {
        if(window.confirm('해당 글을 삭제하시겠습니까 ?')) {
            axios.delete(`${PROXY}/clubs/${location.state.content.club_id}/articles/${location.state.content.id}`, {
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                  }
              })
            .then((res) => {
                console.log(res);
                navigate('/clubs');
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    // 게시물 조회 & 유저 이미지 조회
    useEffect(() => {
        
        const getDetail = axios.get(`${PROXY}/clubs/${location.state.content.club_id}/articles/${location.state.content.id}`)
        getDetail.then((res) => {
            console.log(res.data);
            setDetailInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        // writer id로 통신하게 추후 변경
        const getUserData = axios.get(`${PROXY}/accounts/${localStorage.getItem('react_userId')}/update/`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
            }
        })
        getUserData.then((res) => {
            setProfileImg(res.data.image);
        })
        .catch((err) => {
            console.log(err);
        })

        
    }, []);

    return (
        <section className='ClubArticleDetailPage'>
            <Header/>
            <Navbar val={"club"}/>
            <div className='post-detail-container'>
                <div id='post-detail-content'>
                    <div>{location.state.content.category}</div>
                    <div id='post-detail-writer-box'>
                        <img src={profileImg} alt='x'/>
                        <div>{location.state.content.writer_nickname} <br/>{location.state.content.create_time && location.state.content.create_time.substr(0, 10)}</div>
                        {location.state.content.writer_nickname === localStorage.getItem('react_nickname') &&
                            <div id='detail-btns'>
                                <button onClick={clickModify}>수정</button>
                                <button onClick={clickDelete}>삭제</button>
                            </div>}
                    </div>
                    <div>{location.state.content.title}</div>
                    <div>{location.state.content.description}</div>
                    <br/><img src={location.state.content.image} alt='x'/><br/><br/>
                </div>
                <ClubArticleRepleBox club_id={location.state.content.club_id} post_id={location.state.content.id}/>
            </div>
        </section>
    );
};

export default ClubArticleDetailPage;