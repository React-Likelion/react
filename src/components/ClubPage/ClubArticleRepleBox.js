import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { PROXY } from '../../data/serverUrl';
import '../../style/components/ClubPage/ClubArticleRepleBox.css';
import ClubArticleReplyItem from "./ClubArticleReplyItem";

const ClubArticleRepleBox = ({club_id, post_id}) => {
    const PROXY = process.env.REACT_APP_PROXY;
    const [comments, setComments] = useState([]);
    const [commentInfo, setCommentInfo] = useState({
        content: '',
        writer_id: localStorage.getItem('react_userId'),
        board_id: Number(post_id),
    })

    const handleChangeCommentData = (e) => {
        setCommentInfo({
            ...commentInfo,
            content: e.target.value
        })
    }

    // 댓글 등록
    const handlePostCommentBtn = () => {

        if(!commentInfo.content) {
            alert('댓글을 입력해 주세요');
            return;
        }

        if(!localStorage.getItem('react_accessToken')) {
            alert('로그인 후 작성해주세요.');
            return;
        }

        if(window.confirm('댓글을 등록하시겠습니까 ?')) {
            axios.post(`${PROXY}/clubs/${club_id}/articles/${post_id}/comment/`, commentInfo, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
                }
            })
            .then((res) => {
                alert('댓글이 등록되었습니다.');
                setComments([...comments, commentInfo]);
                setCommentInfo({
                    ...commentInfo, content: ''
                })
                window.location.reload();
            })
            .catch((err) => {
                alert('댓글을 등록하지 못했습니다.');
            })
        }
    }

    // 댓글 조회
    useEffect(() => {
        axios.get(`${PROXY}/clubs/${club_id}/articles/${post_id}/comment/`)
        .then((res) => {
            console.log(res.data)
            setComments(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    console.log(comments)

    return (
        <section id='ClubArticleRepleBox'>
            <div id='reple-input-bar'>
                <input type='text' placeholder='  댓글을 입력해 주세요' value={commentInfo.content} onChange={handleChangeCommentData}/>
                <button onClick={handlePostCommentBtn}>입력</button>
            </div>
            <div>
                댓글 <img src={`${process.env.PUBLIC_URL}/img/chat.png`} /> 
                {comments.length}
            </div>
            {
                comments.map((ele, idx) => {
                    return <ClubArticleReplyItem ele={ele} key={idx} club_id={club_id} post_id={post_id} setComments={setComments}/>
                })
            }
        </section>
    );
};

export default ClubArticleRepleBox;