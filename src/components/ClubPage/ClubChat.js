import "../../style/components/ClubPage/ClubChat.css"
import { database } from '../../services/firebase';
import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {onSnapshot} from 'firebase/firestore'

const ClubChat = ({id, title}) => {
    const [chats, setChats]=useState([]); //채팅 목록
    const [nickname, setNickname] = useState(); //유저 닉네임 저장
    const navigate = useNavigate();
    const collectionRef = collection(database, "club-rooms", id, 'messages');
    useEffect(()=>{
        setNickname(localStorage.getItem('react_nickname')); //유저 닉네임 저장
        const getData = async () => {
            const q = await query(collectionRef, orderBy("timestamp","asc"));
            onSnapshot(q, (snapshot) => {
                let chatList=[];
                snapshot.forEach((doc) => {
                    chatList.push({...doc.data()})
                })
                setChats(chatList);
                // console.log(chatList)
            })
        };
        getData();
    },[]);

    return (
        <section>
            <div className='veiwChat' onClick={()=>navigate(`rooms/${id}`,{
                        state: {
                            title: title,
                        }
                })}>
                {
                    chats.map((ele,i) => {
                        if(ele.nickname === nickname){ //내가 보낸 채팅
                            return (
                                <>
                                    <div className="chat-my" key={i}>{ele.text}</div>
                                </>
                            )
                        } else{ //상대방이 보낸 채팅
                            return (
                                <>
                                    <div className='nicknameBox-your'>{ele.nickname}</div>
                                    <div className='chat-your' key={i}>{ele.text}</div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </section>
    );
}

export default ClubChat;