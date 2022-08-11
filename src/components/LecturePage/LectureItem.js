import React from 'react';
import '../../style/components/LecturePage/LectureItem.css';
import { useNavigate } from 'react-router-dom';

const LectureItem = ({id,title,img,price,categoryData,detailCategoryData}) => {
    const navigate = useNavigate();
    const propsArray = [
        {lectureId:id,
        lectureTitle:title,
        lectureImg:img,
        lecturePrice:price,
        categoryData:categoryData,
        detailCategoryData:detailCategoryData,
    },
    ];

    const clickLectureItem = ()=>{
        //강의 상세 페이지로 이동하도록
        navigate('/lecture/detail',{state:{lecture:propsArray}});
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