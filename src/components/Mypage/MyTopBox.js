import React, { useEffect, useState } from 'react';
import '../../style/components/Mypage/MyTopBox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyTopBox = ({category}) => {

    const [datas, setDatas] = useState([]);
    const PROXY = process.env.REACT_APP_PROXY;
    let propsObj;
    const propsArray = [];
    const navigate = useNavigate();

    useEffect(() => {
        // set data
        switch(category){
            case 'lecture' : {
                axios.get(`${PROXY}/mypagelectures/`,{
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
                
                break;
            }
            case 'mentoring' : {
                
                break;
            }
            case 'community' : {
                
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
    }

    return (
        <section id='MyTopBox'>
            {
                (datas.length !== 0)?
                datas.map((ele, idx) => 
                    <section id='my-container' onClick={()=>clickItem(ele)}>
                        <img src={PROXY+ele.image1} alt="강의이미지" />
                        <div>{ele.title}</div>
                    </section>
                ):
                <p>존재하지 않습니다.</p>
            }
        </section>
    );
};

export default MyTopBox;