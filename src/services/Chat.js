import { database } from './firebase';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "firebase/firestore/lite";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import '../style/services/Chat.css'


function Chat() {
    const {id}=useParams();
    const [nickname, setNickname] = useState();
    

    const [msg, setMsg] = useState(""); //메세지
    const [chats, setChats]=useState([]); //채팅 목록
    const handleOnChange = (e) => {
        setMsg(e.target.value);
    };
    const usersCollectionRef = collection(database, "chat-rooms", id, 'messages');
    //create messages
    const handleSumbit = async (e) => {
        e.preventDefault();
        const newChat = {
            nickname: nickname,
            text: msg,
            timestamp: serverTimestamp(),
        };
        try {
            const res = await addDoc(usersCollectionRef, newChat);
            setChats([...chats, newChat]);
            console.log(res); // res는 undefined입니다.
        } catch (e) {
            console.log(e);
        }
    }
    //read messages
    useEffect(()=>{
        setNickname(localStorage.getItem('nickname'));
        const getData = async () => {
            const q = await query(usersCollectionRef, orderBy("timestamp","asc"));
            const data = await getDocs(q);
            const newData = data.docs.map((doc) => ({
                ...doc.data()
            }));
            console.log(newData);
            setChats(newData);
        };
        getData();
    },[]);

    return (
        <div>
            <Header/>
            <div className='chat-container'>
                <div className='chat-box'>
                    {
                        chats.map((ele,i) => {
                            if(ele.nickname == nickname){
                                return <div className="chat-smallbox-my" key={i}>{ele.text}</div>
                            } else{
                                return <div className='chat-smallbox-your' key={i}>{ele.text}</div>
                            }
                        })
                    }
                </div>
                
                <div className='inputbox'>
                    <form onSubmit={handleSumbit}>
                        <input
                            placeholder="내용을 입력하세요."
                            value={msg}
                            onChange={handleOnChange}
                        />
                        <button type="submit">전송</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;