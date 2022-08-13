import { database } from './firebase';
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, query} from "firebase/firestore/lite";
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Chat() {
    const {id}=useParams();

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
        const getData = async () => {
            const q = await query(usersCollectionRef);
            const data = await getDocs(q);
            const newData = data.docs.map((doc) => ({
                ...doc.data()
            }));
            console.log(newData);
            setChats(newData);
        };
        getData();
    },[]);

    console.log(chats)
    return (
        
        <div className="chat-container">
            <Header/>
        <div className="chat-middle">
            채팅페이지
        {
            chats.map((ele,i) => {
                return <div key={i}>{ele.text}</div>
            })
        }

        </div>
        <div className="chat-bottom">
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
    );
}

export default Chat;