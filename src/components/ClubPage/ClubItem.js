import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../style/components/ClubPage/ClubItem.css"

const ClubItem = ({dummyData}) => {
    const navigate = useNavigate();

    const goDetailPage = () => {
        navigate(`/club/detail/${dummyData.id}`)
    }

    return (
        <section onClick={goDetailPage} className='clubItemContainer'>
            <div className='clubItemBox'>
                <div className='clubContents'>
                    <div className='clubImgBox'>
                        <img className='clubImg' src='img/Example.png'/>
                    </div>
                    <div className='clubLocation'>{dummyData.location}</div>
                    <div className='clubNameMemberBox'>
                        <div className='clubName'>{dummyData.name}</div>
                        <div className='clubMember'>
                            <img src='img/memberImg.png'/>
                            <span>{`${dummyData.members}명`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClubItem;