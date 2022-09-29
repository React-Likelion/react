import React, { useEffect, useState } from 'react';
import '../../style/components/MyPage/MyTopBox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyTopBox = ({category}) => {

    const [datas, setDatas] = useState([]);
    const PROXY = process.env.REACT_APP_PROXY;
    let propsObj;
    const propsArray = [];
    const navigate = useNavigate();

    useEffect(() => {
        let url = '';
        // set data
        switch(category){
            case 'lecture' : {
                url = `${PROXY}/lectures/mypagelectures/`;
                break;
            }
            case 'club' : {
                url = `${PROXY}/clubs/signed/${localStorage.getItem('react_userId')}/`;
                break;
            }
            case 'mentoring' : {
                url = `${PROXY}/mentorings/register/`;
                break;
            }
            case 'community' : {
                url = `${PROXY}/community/?writer_id=${localStorage.getItem('react_userId')}`;
                break;
            }
        }

        axios.get( url ,{
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
        .then((res)=>{
            setDatas(res.data);
        }).catch((err)=>{
            console.log(err);
            // alert('데이터를 불러오지 못했습니다.');
        })

    },[category]);

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

    async function clickItem(ele){
        try{
            let prop = await promise(ele);
            propsArray.push(prop);
            navigate('/lecture/detail',{state:{lecture:propsArray}});
        }catch(err){
            console.log(err);
        }
    }
    const clickItems = (ele)=>{
        if(category === 'club'){
            navigate(`/club/detail/${ele.id}`);
        }else if(category === 'mentoring'){
            navigate(`/mentoring/detail/${ele.id}`);
        }else if(category === 'community'){
            navigate(`/community/${ele.id}`);
        }
        
    }
    return (
        <section id='MyTopBox'>
            {
                (datas.length !== 0 && category === 'lecture')?
                datas.map((ele, idx) => 
                    <section key={idx} id='my-container' style={{cursor:"pointer"}} onClick={()=>clickItem(ele)}>
                        <img src={PROXY+ele.image1} alt="강의이미지" />
                        <div>{ele.title}</div>
                    </section>
                ):(datas.length !== 0 && category !== 'lecture')?
                datas.map((ele, idx) => 
                    <section key={idx} id='my-container' style={{cursor:"pointer"}} onClick={()=>clickItems(ele)}>
                        <img src={ele.image} alt="이미지" />
                        <div>{ele.title}</div>
                        <div>{ele.name}</div>
                    </section>):
                <p>존재하지 않습니다.</p>
            }
        </section>
    );
};

export default MyTopBox;