import React from 'react';
import '../../style/components/MainPage/MainContentsItem.css';
import { lecture_data, mentoring_data, club_data, community_data } from '../../data/mainpage_info';

const MainContentsItem = ({category}) => {
    // 박스 하나 요소 정의
    const makeItem = (ele) => {
        const infoItem = [];
        switch (category) {
            case 'lecture': 
                infoItem.push(
                <div id='lecture-item'>
                    <div>{ele.image}</div>
                    <div>{ele.title}</div>
                </div>
                )
                break;
            case 'mentoring': 
                infoItem.push(
                <div id='mentoring-item'>
                    <div>{ele.image}</div>
                    <div>{ele.title}</div>
                    {ele.tag.map((ele) => <span>{ele}</span>)}
                </div>
                )
                break;
            case 'club': 
                infoItem.push(
                <div id='club-item'>
                    <div>{ele.image}</div>
                    <div>{ele.name}</div>
                    <div>{ele.location}  {ele.member}명</div>
                </div>
                )
                break;
            case 'community': 
                infoItem.push(
                <div id='community-item'>
                    <div>{ele.title}  {ele.date}</div>
                </div>
                )
                break;
        }
        return infoItem
    }

    // 박스 채워주는 함수
    const makeInfoBox = () => {
        // axios로 값 받아서 getInfo로 저장
        let getInfo = [];
        const infoBox = [];
        switch (category) {
            case 'lecture': getInfo = lecture_data; break;
            case 'mentoring': getInfo = mentoring_data; break;
            case 'club': getInfo = club_data; break;
            case 'community': getInfo = community_data; break;
        }
        getInfo.map((ele) => {
            infoBox.push(makeItem(ele))
        })
        return infoBox
    }

    return (
        <div id={`${category}_container`}>
            {makeInfoBox()}
        </div>
    );
};

export default MainContentsItem;