import React, {useEffect, useState} from 'react';
import '../style/pages/MyPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer.js';
import MyTopBox from '../components/MyPage/MyTopBox';
import MyBottomBox from '../components/MyPage/MyBottomBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Payment from '../Payment/index.js';
import Modal from 'react-bootstrap/Modal';

const MyPage = () => {
    const navigate = useNavigate();
    const [mypageInfo] = useState({
        'lecture' : ['수강중인 강의', '등록한 강의'],
        'club' : ['가입된 동호회', '개설한 동호회'],
        'mentoring' : ['가입된 멘토멘티', '개설한 멘토멘티'],
        'community' : ['내가 쓴 글']
    });
    const [selected, setSelected] = useState('lecture');
    const PROXY = process.env.REACT_APP_PROXY;
    const [userInfo, setUserInfo] = useState([]);
    const [applicationModal,setApplicationModal] = useState(false);
    const [detailImg,setDetailImg] = useState('');
    const formData = new FormData();


    const handleCategory = (e) => {
        setSelected(e.currentTarget.id);
    };
    const clickSecession = ()=>{
        if (window.confirm("정말 삭제합니까?")){
            // fetch(`${PROXY}/accounts/${localStorage.getItem('react_userId')}/update/`,{ method: 'DELETE' },{
            //     headers: {
            //         'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            //     }
            // })
            axios.delete(`${PROXY}/accounts/${localStorage.getItem('react_userId')}/update/`,{
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                }
            })
            .then((res)=>{alert('회원탈퇴가 정상적으로 되었습니다.');
                localStorage.removeItem('react_accessToken');
                localStorage.removeItem('react_refreshToken');
                localStorage.removeItem('react_userId');
                localStorage.removeItem('react_email');
                localStorage.removeItem('react_nickname');
                navigate('/');
            
    })
            .catch((err)=>alert(err));
        }else{
            alert("취소합니다.");
        }
    };

    useEffect(() => {
        axios.get(`${PROXY}/accounts/${localStorage.getItem('react_userId')}/`, {
            headers : {
                Authorization: 'Bearer '+ localStorage.getItem('react_accessToken')
            }
        })
        .then((res) => {
            setUserInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const onImgChange = (e)=>{
        e.preventDefault();

        
        let fileUrl;
        let reader = new FileReader();
        reader.onload = ()=>{
            fileUrl = reader.result;
            setDetailImg(fileUrl);
        };
        reader.readAsDataURL(e.target.files[0]);
        formData.append("image",e.target.files[0]);
    };

    const clickProfileChange = ()=>{
        handleShow();
    };

    const handleClose = () => {
        setApplicationModal(false);
        setDetailImg('');
    };
    const handleShow = () =>{
        setApplicationModal(true);
    };

    const clickChange = ()=>{
        axios.patch(`${PROXY}/accounts/${localStorage.getItem("react_userId")}/update/`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>console.log(err))
    };

    return (
        <>
            <Header />
            <section className='my-container'>
                <article id='left-side'>
                    
                    <button type="button" onClick={clickProfileChange}>프로필 이미지 변경</button>
                    {
                        (!applicationModal) ||
                        <div id="modalDiv" style={{padding:"3%"}}>
                            <Modal className="modal-container" show={applicationModal} onHide={handleClose}>
                                <input type="file" onChange={onImgChange} />
                                {
                                    (detailImg.length!==0)?
                                    <div style={{margin:"0 auto",textAlign:"center"}}><img src={detailImg} style={{width:"30%",border:"0 solid",borderRadius:"70%"}} alt='' /></div>:
                                    <div style={{margin:"0 auto",textAlign:"center"}}><img src={userInfo.image} style={{width:"30%",border:"0 solid",borderRadius:"70%"}} alt='' /></div>
                                }
                                <button type="button" onClick={clickChange}>확인</button>
                            </Modal>
                        </div>
                    }
                    <div><img src={userInfo.image} alt='이미지 없음'/></div>
                    <div>{userInfo.name} 님</div>
                    <div id='point'><img src={`${process.env.PUBLIC_URL}/img/coin.png`}/>{userInfo.point} P</div>
                    <div><Payment/></div>
                    <span>내 정보</span>
                    <div></div>
                    <ul>
                        <li id='lecture' className={selected === 'lecture' && 'my-selected'} onClick={handleCategory}>내 강의</li>
                        <li id='club' className={selected === 'club' && 'my-selected'} onClick={handleCategory}>내 동호회</li>
                        <li id='mentoring' className={selected === 'mentoring' && 'my-selected'} onClick={handleCategory}>내 멘토멘티</li>
                        <li id='community' className={selected === 'community' && 'my-selected'} onClick={handleCategory}>내 커뮤니티</li>
                    </ul>
                    <div id='signout' onClick={clickSecession}>회원탈퇴</div>
                </article>
                <article id='right-side'>
                    <div>&nbsp;&nbsp;&nbsp;{mypageInfo[`${selected}`][0]}</div>
                    <MyTopBox category={selected}/>
                    <div>&nbsp;&nbsp;&nbsp;{mypageInfo[`${selected}`][1]}</div>
                    <MyBottomBox category={selected}/>
                </article>
            </section>
            <Footer/>
        </>
    );
};

export default MyPage;