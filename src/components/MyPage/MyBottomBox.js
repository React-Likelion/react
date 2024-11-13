import React,{useState,useEffect} from 'react';
import axios from 'axios';

import '../../style/components/MyPage/MyBottomBox.css';
import MyItem from './MyItem';

const MyBottomBox = ({category}) => {

    const PROXY = process.env.REACT_APP_PROXY;
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        let url = '';
        // set data
        switch(category){
            case 'lecture' : {
                url = `${PROXY}/lectures/mypage/`;
                break;
            }
            case 'club' : {
                url = `${PROXY}/clubs/made/${parseInt(localStorage.getItem('react_userId'))}/`;
                break;
            }
            case 'mentoring' : {
                url = `${PROXY}/mentorings/make/`;
                break;
            }
            case 'community' : {
                setDatas([]);
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
        })
        .catch((err)=>{
            console.log(err);
            // alert('데이터를 불러오지 못했습니다.');
        })

    },[category]);

    return (
        <section id='MyTopBox'>
            {
                datas.length === 0 ?
                    <p>존재하지 않습니다</p> 
                    :
                    datas.map((ele, idx) =>
                        <MyItem category={category} ele={ele} idx={idx} key={idx}/>)
            }
        </section>
    );
};

export default MyBottomBox;