import React from 'react';
import "../../style/components/ClubPage/ClubItem.css"

const ClubItem = ({dummyData}) => {
    return (
        <section className='clubItemContainer'>
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