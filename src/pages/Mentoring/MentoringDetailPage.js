import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { PROXY } from '../../data/serverUrl';
import Footer from '../../components/Footer';

const MentoringDetailPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [mentoringList, setmentoringList] = useState([]); //멘토링 정보 리스트들
    const [member, setMember] = useState(); //채팅방에 닉네임이 있을때 채팅방에 접근 가능
    const Token = localStorage.getItem('react_accessToken');
    
    useEffect(() => {
        //먼저 멘토멘티 리스트 받아오기
        axios.get(`${PROXY}/mentorings/${id}/`)
            .then((res)=>{
                if(res.data){
                    console.log(res)
                    setmentoringList(res.data);//가져온 모든 리스트를 배열에 저장한다.
                }else{
                    alert('멘토링 리스트를 가져오는데 실패했습니다.')
                }
            })
    }, []);

    const inHandler = (e) => {
        axios.get(`${PROXY}/mentorings/${id}/mentoring-chats/`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
            .then((res) => {
                // if(mentoringList.limit === mentoringList.member_cnt){
                //     alert('인원이 가득 찼습니다')
                // }else{
                    alert('입장에 성공하였습니다');
                    navigate(`room/${mentoringList.id}`,{
                        state: {
                            title: mentoringList.title,
                        }
                    });
                }
                // console.log(res);
            // }
            )
            .catch(()=>{alert('로그인 후에 시도해주세요!')})
    }

    return (
        <div>
            <Header />
            <div className='detailBox'>
                <div id='detailTitleBox'>{mentoringList.title}</div>
                <div id='detailImgBox'>
                    <img src={mentoringList.image} alt='이미지' />
                </div>
                <section className='detailSmallBox'>
                    <div id='detailContentBox'>{mentoringList.description}</div>
                    <section className='detailProfileBox'>
                        <div id='profileImg'>
                            <img src='/img/Profile.png' alt='이미지' />
                            {mentoringList.nickname}
                        </div>
                        <section className='profileDetailBox'>
                            <div id='info'>멤버{mentoringList.member_cnt}명/정원{mentoringList.limit}명</div>
                            <div className='detailTagBox'>
                                <div className='detailTagItem'>{mentoringList.tag}</div>
                                <div className='detailTagItem'>{mentoringList.tag2}</div>
                                <div className='detailTagItem'>{mentoringList.tag3}</div>
                            </div>
                        </section>
                    </section>
                    <div className='joinBtn' onClick={inHandler}>입장하기</div>
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default MentoringDetailPage;

