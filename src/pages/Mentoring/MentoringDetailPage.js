import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Footer from '../../components/Footer';
import { collection, query, getDocs } from 'firebase/firestore';
import { database } from '../../services/firebase';

const MentoringDetailPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    const {id} = useParams();
    const [member, setMember] = useState([]); //채팅방에 닉네임이 있을때 채팅방에 접근 가능
    const [getNickname,setGetNickname] = useState([]);
    const [mentoringList, setmentoringList] = useState([]); //멘토링 정보 리스트들
    const [propsObj, setPropsObj]=useState({

    });
    const userArr=[]
    const ColRef = collection(database, "chat-rooms", id, 'messages');
    
    //채팅방에 입장되어있는 닉네임 받아오기
    useEffect(() => {
        const getData = async () => {
            const q = await query(ColRef);
            const data = await getDocs(q);
            const newData = data.docs.map((doc) => ({
                ...doc.data()
            }));
            setMember(newData.map(item => item.nickname));
            
        };
        const getnick = [...new Set(member)]
        setGetNickname(getnick)
        getData();
    },[member]);

    const nick = localStorage.getItem('react_nickname');

    //채팅방에 입장되어있는 닉네임 받아오기
    useEffect(() => {
        //먼저 멘토멘티 리스트 받아오기
        axios.get(`${PROXY}/mentorings/${id}/`)
            .then((res)=>{
                if(res.data){
                    setmentoringList(res.data);//가져온 모든 리스트를 배열에 저장한다.
                    setPropsObj({
                        leaderNick: res.data.nickname,
                        title: res.data.title,
                    })
                }else{
                    alert('멘토링 리스트를 가져오는데 실패했습니다.')
                }
            })
    }, []);

    const inHandler = (e) => {
        userArr.push(propsObj);
        if(mentoringList.limit === mentoringList.member_cnt){
            if(getNickname.includes(`${nick}`)){
                axios.get(`${PROXY}/mentorings/${id}/mentoring-chats/`, {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                    }
                })
                    .catch(e => alert("로그인 후 시도해주세요"))
                alert('입장에 성공하였습니다');
                navigate(`room/${mentoringList.id}`,{
                    state: {
                        usedata: userArr,
                    }})
            } else if(nick === mentoringList.nickname ){
                axios.get(`${PROXY}/mentorings/${id}/mentoring-chats/`, {
                    headers: {
                        'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                    }
                })
                    .catch(e => alert("로그인 후 시도해주세요"))
                navigate(`room/${mentoringList.id}`,{
                    state: {
                        usedata: userArr,
                    }})
            } else{
                alert('인원이 가득찼습니다')
            }
        }else{
            axios.get(`${PROXY}/mentorings/${id}/mentoring-chats/`, {
                headers: {
                    'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
                }
            })
                .catch(e => alert("로그인 후 시도해주세요"))
            alert('입장에 성공하였습니다');
            navigate(`room/${mentoringList.id}`,{
                state: {
                    usedata: userArr,
                }
            });
        }
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

