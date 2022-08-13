import React, {useState, useEffect} from 'react';
import Header from './../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { PROXY } from '../../data/serverUrl';

const MentoringDetailPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [mentoringList, setmentoringList] = useState([]);

    useEffect(() => {
        //먼저 멘토멘티 리스트 받아오기
        axios.get(`${PROXY}/mentorings/${id}/`)
            .then((res)=>{
                if(res.data){
                    setmentoringList(res.data);//가져온 모든 리스트를 배열에 저장한다. 
                    
                }else{
                    alert('멘토링 리스트를 가져오는데 실패했습니다.')
                }
            })
    }, []);

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
                            <br />{mentoringList.nickname}
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
                    <div className='joinBtn' onClick={() => navigate(`room/${mentoringList.id}`)}>입장 신청하기</div>
                </section>
            </div>
        </div>
    );
};

export default MentoringDetailPage;

