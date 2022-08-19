import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../style/components/Mypage/MyBottomBox.css';

const MyBottomBox = ({category}) => {
    const [datas, setDatas] = useState([]);
    const PROXY = process.env.REACT_APP_PROXY;
    let propsObj;
    const propsArray = [];
    const navigate = useNavigate();

    useEffect(() => {
        // set data
        console.log(category);
        switch(category){
            case 'lecture' : {
                axios.get(`${PROXY}/lectures/mypage/`,{
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                    }
                })
                .then((res)=>{
                    console.log(res);
                    setDatas(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
                break;
            }
            case 'club' : {
                console.log(`${PROXY}/clubs/made/${parseInt(localStorage.getItem('react_userId'))}/`);
                axios.get(`${PROXY}/clubs/made/${parseInt(localStorage.getItem('react_userId'))}/`,{
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                    }
                })
                .then((res)=>{
                    console.log(res);
                    console.log(res.data);
                    setDatas(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
                break;
            }
            case 'mentoring' : {
                axios.get(`${PROXY}/mentorings/make/`,{
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                    }
                })
                .then((res)=>{
                    console.log(res);
                    console.log(res.data);
                    setDatas(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
                break;
            }
            case 'community' : {
                setDatas([]);
                break;
            }
        }
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
                lectureWriter:ele.writer,
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
            console.log(prop);
            propsArray.push(prop);
            navigate('/lecture/detail',{state:{lecture:propsArray}});
        }catch(err){
            console.log(err);
        }
    };
    const clickItems = (ele)=>{
        if(category === 'club'){
            navigate(`/club/detail/${ele.id}`);
        }else if(category === 'mentoring'){
            navigate(`/mentoring/detail/${ele.id}`);
        }
        
    };
    console.log({category}.category);
    return (
        <section id='MyTopBox'>
            {
                (datas.length !== 0 && {category}.category === 'lecture')?
                datas.map((ele, idx) =>
                    <section key={idx} id='my-container' style={{cursor:"pointer"}} onClick={()=>clickItem(ele)}>
                        <img src={PROXY+ele.image1} alt="강의이미지" />
                        <div>{ele.title}</div>
                    </section>
                ):(datas.length !== 0 && {category}.category !== 'lecture')?
                datas.map((ele, idx) =>
                    <section key={idx} id='my-container' style={{cursor:"pointer"}} onClick={()=>clickItems(ele)}>
                        <img src={ele.image1} alt="이미지" />
                        <div>{ele.title}</div>
                        <div>{ele.name}</div>
                    </section>):
                <p>존재하지 않습니다.</p>
            }
        </section>
    );
};

export default MyBottomBox;