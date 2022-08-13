import React from 'react';
import '../../style/components/MentoringPage/MentoringItem.css'
import { useNavigate } from 'react-router-dom';


function MentoringItem({id, image, title, description, tag1, tag2, tag3, limit, member_cnt}) {
    const navigate = useNavigate();

    const onClickItemBox = () => {
        navigate(`/mentoring/detail/${id}`)
    }
    
    console.log(image)
    console.log(typeof(image))

    return (
        <div className='mentoringItem' onClick={onClickItemBox}>
            <div className='itemBox'>
                <section className='tagBox'>
                    <div className='tagItem'>{tag1}</div>
                    <div className='tagItem'>{tag2}</div>
                    <div className='tagItem'>{tag3}</div>
                </section>
                <section className='showBox'>
                    <section className='imgBox'><img src={image}/></section>
                    <section className='showDetail'>
                        <div className='showTitle'>{title}</div>
                        <div className='showContent'>{description}</div>
                        <div className='showProfile'>
                            <div className='showNickName'>이름</div>
                            <div className='showMember'>멤버 {member_cnt}/{limit}</div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default MentoringItem;