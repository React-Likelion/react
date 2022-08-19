import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../style/components/MainPage/MainContentsItem.css';
// import {PROXY} from '../../data/serverUrl.js';
import { useNavigate } from 'react-router-dom';

const MainContentsItem = ({category}) => {
    const PROXY = process.env.REACT_APP_PROXY;
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    let propsObj;
    const propsArray = [];

    function promise(ele){
        return new Promise(function(resolve,reject){
            propsObj = {
                lectureId:ele.id,
                lectureTitle:ele.title,
                lectureThumbNail:ele.image1,
                lectureImg2:ele.image2,
                lectureImg3:ele.image3,
                lectureImg4:ele.image4,
                lectureImg5:ele.image5,
                lecturePrice:ele.price,
                lectureLikeCnt:ele.like_cnt,
                lectureWriter:ele.writer_nickname,
                lectureEnroll:ele.enroll_students,
                lectureYoutube:ele.youtube_link,
                lectureLikeMember:ele.like_members,
                lectureDescription:ele.description,
            };
            resolve(propsObj);
        })
    }

    async function callData(ele){
        try{
            let prop = await promise(ele);
            propsArray.push(prop);
            navigate('/lecture/detail',{state:{lecture:propsArray}});
        }catch(err){
            console.log(err);
        }
    };
    const clickMentoring = (ele)=>{
        navigate(`/mentoring/detail/${ele.id}`);
    };
    const clickClub = (ele)=>{
        navigate(`/club/detail/${ele.id}`);
    };
    const clickCommunity = (ele)=>{
        navigate(`/community/${ele.id}`);
    }

    // 박스 하나 요소 정의
    const makeItem = (ele) => {
        const infoItem = [];
        switch (category) {
            case 'lecture': 
                infoItem.push(
                <div id='lecture-item' style={{cursor:"pointer"}} onClick={()=>callData(ele)}>
                    <img src={PROXY+ele.image1}/>
                    <div>{ele.title}</div>
                </div>
                )
                break;
            case 'mentoring': 
                infoItem.push(
                <div id='mentoring-item' style={{cursor:"pointer"}} onClick={()=>clickMentoring(ele)}>
                    <img src={ele.image}/>
                    <div>{ele.title}</div>
                    <div className='scroll'>
                        <span className='spanTag'>{ele.tag}</span>
                        <span className='spanTag'>{ele.tag2}</span>
                        <span className='spanTag'>{ele.tag3}</span>
                    </div>
                </div>
                )
                break;
            case 'club': 
                infoItem.push(
                <div id='club-item' style={{cursor:"pointer"}} onClick={()=>clickClub(ele)}>
                    <img src={ele.image} alt="클럽이미지" />
                    <div>{ele.name}</div>
                    <div>{ele.location}  {ele.member.length}명</div>
                </div>
                )
                break;
            case 'community': 
                infoItem.push(
                <div id='community-item' style={{cursor:"pointer"}} onClick={()=>clickCommunity(ele)}>
                    <div>{ele.title}  {ele.date}</div>
                </div>
                )
                break;
        }
        return infoItem
    }

    useEffect(() => {
        axios.get(`${PROXY}/${category}s/main/`)
        .then((res) => {
            setInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[category])


    return (
        <div id={`${category}_container`}>
            {
                info && info.map((ele, idx) => {
                    return makeItem(ele)
                })
            }
        </div>
    );
};

export default MainContentsItem;