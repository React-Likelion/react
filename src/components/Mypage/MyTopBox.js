import React, { useEffect, useState } from 'react';
import '../../style/components/Mypage/MyTopBox.css';

const MyTopBox = ({category}) => {

    const [datas, setDatas] = useState([]);

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

    useEffect(() => {
        // set data
        switch(category){
            case 'lecture' : {

                break;
            }
            case 'club' : {
                
                break;
            }
            case 'mentoring' : {
                
                break;
            }
            case 'community' : {
                
                break;
            }
        }
    })

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

export default MyTopBox;