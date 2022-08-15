import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../style/components/ClubPage/ClubItem.css"

const ClubItem = ({item}) => {
    const navigate = useNavigate();

    const goDetailPage = () => {
        navigate(`/club/detail/${item.id}`)
    }


    return (
        <section onClick={goDetailPage} className='clubItemContainer'>
            <div className='clubItemBox'>
                <div className='clubContents'>
                    <div className='clubImgBox'>
                        <img className='clubImg' src={item.image}/>
                    </div>
                    <div className='clubLocation'>{item.location}</div>
                    <div className='clubNameMemberBox'>
                        <div className='clubName'>{item.name}</div>
                        <div className='clubMember'>
                            <img src='img/memberImg.png'/>
                            <span>{`${item.member.length}명`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClubItem;