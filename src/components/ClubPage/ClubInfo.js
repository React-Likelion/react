import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// import {PROXY} from '../../data/serverUrl';
import "../../style/components/ClubPage/ClubInfo.css"
import axios from 'axios';

const ClubInfo = ({params, member, name, image, leader}) => {
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    const goArticleUpload = () => {
        navigate('articleUpload', {state : {
            clubId : params.clubId,
        }})
    }

    const clubJoinExit = () => {
        if (member && member.includes(Number(localStorage.getItem("react_userId"))) == false) 
        {
            if (window.confirm("동호회에 가입 하시겠습니까?")) 
            {
                axios
                    .post(`${PROXY}/clubs/${params.clubId}/`, {
                        "id": localStorage.getItem("react_userId")
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
                        }
                    })
                    .then((res) => {
                        alert("동호회 가입 완료")
                        window
                            .location
                            .reload();
                    })
                    .catch((err) => {
                        alert("에러 발생")
                    })
            }
        } 
        else 
        {
            if (window.confirm("동호회를 탈퇴 하시겠습니까?")) 
            {
                // if(leader == localStorage.getItem("react_userId")) 
                // {
                //     let nextLeader = prompt("다음 리더의 닉네임을 적어주세요.", "")
                //     axios.patch(`${PROXY}/clubs/${params.clubId}/`, {body : {
                //             "nickname" : nextLeader,
                //         }
                //     }, {header : {
                //         'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
                //     }}).then((res) => {
                //         alert("리더가 성공적으로 바꼈습니다.")
                //         window.location.reload();
                //     }).catch((err) => {
                //         alert("해당하는 닉네임을 가진 유저가 없습니다.")
                //     })
                // }
                // else 
                // {
                    axios
                    .post(`${PROXY}/clubs/${params.clubId}/`, {
                        "id": localStorage.getItem("react_userId"),
                        "out": localStorage.getItem("react_userId")
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
                        }
                    })
                    .then((res) => {
                        alert("동호회 탈퇴 완료")
                        window
                            .location
                            .reload();
                    })
                    .catch((err) => {
                        alert("에러 발생")
                    })
                // }
            }
        }
    }

    return (
        <section className='ClubInfoContainer'>
            <div className='clubInfo'>
                <img className='clubImg' src={image}/>
                <p className='clubInfoName'>{name}</p>
            </div>
            <div>
                <span className='clubMembers'>멤버 {member && member.length}
                    &nbsp;&nbsp;&nbsp;</span>
                {
                    (localStorage.getItem('react_accessToken'))
                        ? <div>
                                <div onClick={clubJoinExit} className='clubJoin'>
                                    {
                                        member && member.includes(Number(localStorage.getItem("react_userId")))
                                            ? "동호회 탈퇴하기"
                                            : "동호회 가입하기"
                                    }
                                </div>
                                {
                                     member && member.includes(Number(localStorage.getItem("react_userId")))
                                     ? <div className='clubArticleUplodBtn' onClick={goArticleUpload}>글쓰기</div>
                                     : ""
                                }
                            </div>
                        : ""
                }
            </div>
        </section>
    );
}

export default ClubInfo;