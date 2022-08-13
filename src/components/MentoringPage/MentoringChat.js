import React, { useState }from 'react';
import '../../style/components/MentoringPage/MentoringChat.css'

function MentoringChat() {
    const [ chat, setChat ] = useState({
        nickname:'아무개',
        contents:'',
    });
    const [ chatData, setChatData ] = useState([]);

    const editText=(e)=>{
        setChat((chat) => {
            return {...chat, contents: e.target.value}
        });
    }

    const postChatHandler = (e) => {
        const newChat = {
            contents: chat.contents,
        }
        setChatData([...chatData, newChat])
    }

    return (
        <div>
            <div className='backGround'>
                <div className='viewArea'>
                    {chatData.map((chat)=>(<div id='veiwBox'>{chat.contents}</div>))}
                </div>
                <div className='chatBox'>
                    <input id='writingBox' value={chat.contents} onChange={editText}></input>
                    <button onClick={postChatHandler}>전송</button>
                </div>
            </div>
        </div>
    );
}

export default MentoringChat;