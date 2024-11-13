import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../style/components/MyPage/MyTopBox.css';
import MyItem from './MyItem';

const MyTopBox = ({category}) => {
    
    const [datas, setDatas] = useState([]);
    const PROXY = process.env.REACT_APP_PROXY;

    useEffect(() => {
        let url = '';
        // set data
        switch(category){
            case 'lecture' : {
                url = `${PROXY}/lectures/mypagelectures/`;
                break;
            }
            case 'club' : {
                url = `${PROXY}/clubs/signed/${localStorage.getItem('react_userId')}/`;
                break;
            }
            case 'mentoring' : {
                url = `${PROXY}/mentorings/register/`;
                break;
            }
            case 'community' : {
                url = `${PROXY}/community/?writer_id=${localStorage.getItem('react_userId')}`;
                break;
            }
            default:
                
        }

        axios.get( url ,{
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('react_accessToken')
            }
        })
        .then((res)=>{
            setDatas(res.data);
        }).catch((err)=>{
            console.log(err);
        })

    },[category]);

    return (
        <section id='MyTopBox'>
            {
                datas.length === 0 ?
                    <p>존재하지 않습니다</p> 
                    :
                    datas.map((ele, idx) =>
                        <MyItem category={category} ele={ele} idx={idx}/>)
            }
        </section>
    );
};

export default MyTopBox;