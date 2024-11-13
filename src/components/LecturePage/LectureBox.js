import React,{useEffect,useState} from 'react';
import LectureItem from './LectureItem';
import '../../style/components/LecturePage/LectureBox.css';
import axios from 'axios';
import { compareDocumentPosition } from 'domutils';
// import { PROXY } from '../../data/serverUrl';

const LectureBox = ({categoryData,detailCategoryData,option,search}) => {
    const PROXY = process.env.REACT_APP_PROXY;
    //axios로 필터링 된 강의에 대한 정보들을 받아옴
    //정보의 형태는 [object]
    //그걸 map형태로 뿌려줌
    const [Lectures,setLectures] = useState([]);
    
    useEffect(()=>{
        axios.get(`${PROXY}/lectures/`)
        .then((res)=>{
            setLectures(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    useEffect(()=>{
        if(option==='인기순'){
            axios.get(`${PROXY}/lectures/sort/?sort=-like_cnt`)
            .then((res)=>{
                console.log(res.data);
                setLectures(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            axios.get(`${PROXY}/lectures/`)
            .then((res)=>{
                console.log(res.data);
                setLectures(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
    },[option]);

    useEffect(()=>{
        if(detailCategoryData.length === 0){
            axios.get(`${PROXY}/lectures/sort/?main_category=${categoryData}`)
            .then((res)=>{
                console.log(res.data);
                setLectures(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }else{
            axios.get(`${PROXY}/lectures/sort/?sub_category=${detailCategoryData}`)
            .then((res)=>{
                console.log(res.data);
                setLectures(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    },[categoryData,detailCategoryData]);

    useEffect(()=>{
        axios.get(`${PROXY}/lectures/?title=${search}`)
        .then((res)=>{
            setLectures(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[search]);

    return (
        <div id="LectureBoxDiv">
            {
                (Lectures.length!==0)?
                Lectures.map((ele)=>{
                    return <LectureItem id={ele.id} key={ele.id} /*title={ele.title} img={ele.img} price={ele.price}*/ categoryData={categoryData} detailCategoryData={detailCategoryData} />;
                }):
                <div style={{display:"block"}}>
                    <img src='/img/questionMark.png' alt='물음표' />
                    <p>이런! 찾는 강의가 없습니다.</p>
                </div>
            }

        </div>
    );
};

export default LectureBox;