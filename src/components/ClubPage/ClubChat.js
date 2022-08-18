import React from 'react';
import "../../style/components/ClubPage/ClubChat.css"

const ClubChat = () => {

    // const inHandler = (e) => {
    //     axios.get(`${PROXY}/clubs/${id}/clubs-chats/`, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
    //         }
    //     })
    //         .then((res) => {
    //             if(mentoringList.limit === mentoringList.member_cnt){
    //                 if(getNickname.includes(`${nick}`)){
    //                     alert('입장에 성공하였습니다');
    //                     navigate(`room/${mentoringList.id}`,{
    //                         state: {
    //                             title: mentoringList.title,
    //                         }})
    //                 } else if(nick === mentoringList.nickname ){
    //                     navigate(`room/${mentoringList.id}`,{
    //                         state: {
    //                             title: mentoringList.title,
    //                         }})
    //                 } else{
    //                     alert('인원이 가득찼습니다')
    //                 }
    //             }else{
    //                 alert('입장에 성공하였습니다');
    //                 navigate(`room/${mentoringList.id}`,{
    //                     state: {
    //                         title: mentoringList.title,
    //                     }
    //                 });
    //             }
    //             console.log(res);
    //         }
    //         )
    //         .catch(()=>{alert('로그인 후에 시도해주세요!')})
    // }

    return (
        <section>
            <div className='clubChat'>
                동호회 채팅 입장하기
            </div>
        </section>
    );
}

export default ClubChat;