import React from 'react';
import '../../style/components/Mypage/MyBottomBox.css';

const MyBottomBox = ({category}) => {

    const data = [
        {
            image: '/lectures/1.png',
            title: '안녕? 내이름은 이수화'
        },
        {
            image: '/lectures/1.png',
            title: '프론트엔드 희망자죠'
        },
        {
            image: '/lectures/1.png',
            title: '우테코가 목표예요 ㅎㅎ'
        },
        {
            image: '/lectures/1.png',
            title: '우테코가 목표예요 ㅎㅎ'
        }
        ,
        {
            image: '/lectures/1.png',
            title: '우테코가 목표예요 ㅎㅎ'
        },
        {
            image: '/lectures/1.png',
            title: '우테코가 목표예요 ㅎㅎ'
        }
    ]

    return (
        <section id='MyTopBox'>
            {
                data.map((ele, idx) => 
                    <section id='my-container'>
                        <img />   
                        <div>{ele.title}</div>
                    </section>
                )
            }
        </section>
    );
};

export default MyBottomBox;