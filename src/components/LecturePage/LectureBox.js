import React,{useEffect,useState} from 'react';
import LectureItem from './LectureItem';
import '../../style/components/LecturePage/LectureBox.css';
import axios from 'axios';
import { PROXY } from '../../data/serverUrl';

const LectureBox = ({categoryData,detailCategoryData,option}) => {
    //axios로 필터링 된 강의에 대한 정보들을 받아옴
    //정보의 형태는 [object]
    //그걸 map형태로 뿌려줌
    console.log(option);
    const [allLectures,setAllLectures] = useState([]);
    const [filterData,setFilterData] = useState([]);
    const [optionBool,setOptionBool] = useState(true);
    const [categoryArray,setCategoryArray] = useState([]);

    // const filterLecture = [
    //     {
    //         id:1,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },{
    //         id:2,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },{
    //         id:3,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },{
    //         id:4,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },{
    //         id:5,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },{
    //         id:6,
    //         title:'풀스택 개발자가 알려주는 CSS트랜드, TailWind',
    //         img:'https://cdn.class101.net/images/5b55d6d6-0e63-4915-9834-3f6bd356c530',
    //         price:17800,
    //     },
    // ];
    useEffect(()=>{
        axios.get(`${PROXY}/lectures/`)
        .then((res)=>{
            setAllLectures(res.data);
            console.log(allLectures);
            setFilterData(
                allLectures.sort((a,b)=>
                    b.like_cnt - a.like_cnt
                )   
            )
        }).catch((err)=>{
            console.log(err);
        })
    },[])   
    useEffect(()=>{
        if(option==='인기순'){
            setOptionBool(false);
        }else{
            setOptionBool(true);
        }
    },[option]);
    useEffect(()=>{
        // setCategoryArray([]);
        //실행안되네
        console.log('test');
        setCategoryArray([
            allLectures.filter((ele)=>{
                return (ele.main_category === categoryData) || (ele.sub_category === detailCategoryData);
            })
        ]);
        console.log(categoryArray);
    },[categoryData,detailCategoryData]);

    return (
        <div id="LectureBoxDiv">
            {
                (optionBool===true)?
                allLectures.map((ele)=>{
                    return <LectureItem id={ele.id} key={ele.id} /*title={ele.title} img={ele.img} price={ele.price}*/ categoryData={categoryData} detailCategoryData={detailCategoryData} />;
                }):(categoryArray.length===0)?
                filterData.map((ele)=>{
                    return <LectureItem id={ele.id} key={ele.id} /*title={ele.title} img={ele.img} price={ele.price}*/ categoryData={categoryData} detailCategoryData={detailCategoryData} />;
                }):
                categoryArray.map((ele)=>{
                    return <LectureItem id={ele.id} key={ele.id} /*title={ele.title} img={ele.img} price={ele.price}*/ categoryData={categoryData} detailCategoryData={detailCategoryData} />;
                })
            }
        </div>
    );
};

export default LectureBox;