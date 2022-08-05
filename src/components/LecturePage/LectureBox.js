import React from 'react';
import LectureItem from './LectureItem';
import '../../style/components/LecturePage/LectureBox.css';

const LectureBox = () => {
    //axios로 필터링 된 강의에 대한 정보들을 받아옴
    //정보의 형태는 [object]
    //그걸 map형태로 뿌려줌
    const filterLecture = [
        {
            id:1,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },{
            id:2,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },{
            id:3,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },{
            id:4,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },{
            id:5,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },{
            id:6,
            title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
            img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
            price:17800,
        },
    ];

    return (
        <div id="LectureBoxDiv">
            {
                filterLecture.map((ele)=>{
                    return <LectureItem key={ele.id} title={ele.title} img={ele.img} price={ele.price} />;
                })
            }
        </div>
    );
};

export default LectureBox;