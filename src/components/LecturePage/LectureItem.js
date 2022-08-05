import React from 'react';
import '../../style/components/LecturePage/LectureItem.css';
import { useNavigate } from 'react-router-dom';

const LectureItem = ({title,img,price}) => {
    const navigate = useNavigate();

    const clickLectureItem = ()=>{
        //강의 상세 페이지로 이동하도록
        navigate('/');
    };

    const priceMent = `월 ${price}원`;
    return (
        <div onClick={clickLectureItem} style={{cursor:'pointer'}} id="LectureItemDiv">
            <section id="LectureItemImg">
                <img src={img} alt="강의 이미지" />
            </section>
            <section id="LectureItemTitle">
                <p>{title}</p>
            </section>
            <section id="LectureItemInfo">
                <span>{priceMent}</span>
            </section>
        </div>
    );
};

export default LectureItem;