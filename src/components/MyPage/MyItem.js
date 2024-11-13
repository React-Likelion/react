import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../style/components/MyPage/MyItem.css';

const MyItem = ({category, ele, idx}) => {

    const [isHovering, setIsHovering] = useState();
    const navigate = useNavigate();
    let propsObj;
    const propsArray = [];
    const PROXY = process.env.REACT_APP_PROXY;

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
    };

    const clickItems = (ele)=>{
        if(category === 'club'){
            navigate(`/club/detail/${ele.id}`);
        }else if(category === 'mentoring'){
            navigate(`/mentoring/detail/${ele.id}`);
        }
        
    };

    const handleDetail = (e) => {
        if (category === 'lecture') clickItem(ele);
        else clickItems(ele);
    }

    const handleModify = (e) => {
        console.log("수정");
    }

    const handleDelete = () => {

        if(window.confirm('정말 삭제하시겠습니까 ?')) {
            if(category === 'mentoring') {
                axios.delete(`${PROXY}/mentorings/${ele.id}/`, {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                      }
                })
                .then(res => {
                    alert('삭제되었습니다.');
                    window.location.reload();
                })
                .catch(err => {
                    alert('실패하였습니다.');
                })
            }
            else if(category === 'community') {
                axios.delete(`${PROXY}/${category}/${ele.id}/`)
                .then(res => {
                    alert('삭제되었습니다.');
                    window.location.reload();
                })
                .catch(err => {
                    alert('실패하였습니다.');
                })
            }
            else {
                axios.delete(`${PROXY}/${category}s/${ele.id}/`)
                .then(res => {
                    alert('삭제되었습니다.');
                    window.location.reload();
                })
                .catch(err => {
                    alert('실패하였습니다.');
                })
            }
        }
        
    }

    console.log(ele);

    return (
        <section key={idx} id='my-container' style={{cursor:"pointer"}} 
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)} >
            <div id={ isHovering ? 'hoverBox' : 'unHoverBox'}>
                {
                    isHovering &&
                    <>
                        <div id='detailBtn' onClick={handleDetail}>상세</div>
                        <div id='modifyBtn' onClick={handleModify}>수정</div>
                        <div id='deleteBtn' onClick={handleDelete}>삭제</div>
                    </>                
                }   
                {
                        category === 'lecture' ?
                        <>
                            <img src={PROXY+ele.image1} alt="강의이미지" />
                            <div>{ele.title}</div>
                        </> :
                        category === 'community' ?
                        <>
                            <img src={'/img/err_image.png'} alt="이미지" />
                            <div>{ele.title}</div>
                            <div>{ele.name}</div>
                        </> :
                        <>
                            <img src={ele.image} alt="이미지" />
                            <div>{category === 'club' ? ele.name : ele.title}</div>
                            <div>{category === 'club' ? '' : ele.name}</div>
                        </>    
                }
            </div>
        </section>
    );
};

export default MyItem;