import React, {useEffect, useState} from 'react';
import '../../style/components/CommunityPage/DetailRepleItem.css';
import axios from 'axios';
// import { PROXY } from '../../data/serverUrl';
import { useNavigate } from 'react-router-dom';


const DetailRepleItem = ({ele, idx, post_id, comments, setComments}) => {
    // console.log(ele);
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    const [modifyFlag, setModifyFlag] = useState(false);
    const  [modifyContent, setModifyContent] = useState(ele.content);
    
    const handleModifyContent = (e) => {
        setModifyContent(e.target.value);
    }
    
    // 댓글 수정 on/off
    const handleCommentModifyFlagBtn = () => {
        setModifyFlag(!modifyFlag);
    }

    // 댓글 수정
    const handleCommentModifyBtn = (e) => {
        console.log(modifyContent);
        if(window.confirm('해당 댓글을 수정하시겠습니까 ?')) {
            axios.patch(`${PROXY}/communitys/${post_id}/comments/${ele.id}/`, {
                content : modifyContent
            }, {
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                  }
              })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    // 댓글 삭제
    const handleCommentDeleteBtn = () => {
        if(window.confirm('해당 댓글을 삭제하시겠습니까 ?')) {
            axios.delete(`${PROXY}/communitys/${post_id}/comments/${ele.id}/`, {
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                  }
              })
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <section id='DetailRepleItem'>
            <div><img src={`${process.env.PUBLIC_URL}/img/default_profile.png`} alt='이미지 없음'/></div>
            {
                !modifyFlag ?
                <div>
                    <div>{ele.writer_nickname}</div>
                    <div>{modifyContent}</div>
                    <div>{ele.create_time && ele.create_time.substr(0,10)}</div>
                </div> : 
                <div id='modify-box'>
                    <div>{ele.writer_nickname}</div>
                    <input type='text' value={modifyContent} onChange={handleModifyContent}/>
                    <button onClick={handleCommentModifyBtn}>수정</button>
                    <div>{ele.create_time && ele.create_time.substr(0,10)}</div>
                </div>
            }
            <div id='extra-btns'>
                {
                    ele.writer_nickname === localStorage.getItem('react_nickname') && 
                    <>
                        <button value={ele.id} onClick={handleCommentModifyFlagBtn}>수정</button>
                        <button value={ele.id} onClick={handleCommentDeleteBtn}>삭제</button>
                    </>
                }
            </div>
        </section>
    );
};

export default DetailRepleItem;