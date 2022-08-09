import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../../style/components/ClubPage/ClubInfo.css"

const ClubInfo = () => {
    const navigate = useNavigate();
    const goArticleUpload = () => {
        navigate('articleUpload')
    }

    return (
        <section>
            <div className='clubInfo'>
                <img className='clubImg' src={`${process.env.PUBLIC_URL}/img/Example.png`} />
                <p className='clubName'>언더파 골프 클럽</p>
            </div>
            <div>
                <span className='clubMembers'>멤버 34&nbsp;&nbsp;&nbsp;</span>
                <span className='clubInvite'>+ 초대</span>
            </div>
            <div className='clubArticleUplodBtn' onClick={goArticleUpload}>글쓰기</div>
            {/* 글쓰기 버튼을 누르면 글 작성 페이지로 가게 해야 함. 
            커뮤니티 글 작성하기 페이지가 만들어지면 event 걸어서 navigate */}
        </section>
    );
}

export default ClubInfo;