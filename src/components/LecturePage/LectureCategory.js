import React,{useState, useRef} from 'react';
import '../../style/components/LecturePage/LectureCategory.css';

const LectureCategory = ({setDetailCategoryData,setCategoryData,categoryData}) => {
    const [detailIt,setDetailIt] = useState(true);
    const [detailFinance,setDetailFinance] = useState(true);
    const [detailExercise,setDetailExercise] = useState(true);
    const [detailBusiness,setDetailBusiness] = useState(true);
    const [detailMarketing,setDetailMarketing] = useState(true);
    const [detailArt,setDetailArt] = useState(true);
    const [detailForeign,setDetailForeign] = useState(true);
    const [detailCook,setDetailCook] = useState(true);
    const [detailLifeStyle,setDetailLifeStyle] = useState(true);
    const ref = useRef();
    const infoArray = [
        'IT 프로그래밍',
        '금융 제테크',
        '제품 기획',
        '비즈니스',
        '마케팅',
        '미술',
        '외국어',
        '요리',
        '운동',
        '라이프 스타일',
    ];
    
    const clickIt = (e)=>{
        // console.log((e.target.innerHTML).split('<')[0]);
        //console.log(ref.current.__reactProps$fn9mcx9ek2k.children[0]);
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);

        setDetailIt(!detailIt);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        console.log(categoryData);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickFinance = (e)=>{
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailFinance(!detailFinance);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickExercise = (e)=>{
        setDetailFinance(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailExercise(!detailExercise);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickBusiness = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailBusiness(!detailBusiness);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickMarketing = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMarketing(!detailMarketing);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickArt = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailArt(!detailArt);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickForeign = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailForeign(!detailForeign);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickCook = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailCook(!detailCook);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    };
    const clickLifeStyle = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMarketing(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailIt(true);
        setDetailLifeStyle(!detailLifeStyle);
        const categoryDataBool = categoryData==='';
        console.log(categoryDataBool);
        let existenceBool = false;
        for(let value of infoArray){
            if((e.target.innerHTML).split('<')[0]===value){
                existenceBool=true;
            }
        }
        if(categoryDataBool){
            setCategoryData((e.target.innerHTML).split('<')[0]);
        }else if(existenceBool){
            for(let i=0; i<infoArray.length; i++){
                if(infoArray[i]===(e.target.innerHTML).split('<')[0]){
                    infoArray.splice(i,1);
                    break;
                }
            }
            for(let value of infoArray){
                if(categoryData===value){
                    setDetailCategoryData('');
                    setCategoryData((e.target.innerHTML).split('<')[0]);
                }
            }
        }
    }
    const clickCategory = (e)=>{
        const lectureCategory = e.target.innerHTML;
        console.log(e);
        setDetailCategoryData(lectureCategory);
        //클릭한 Category값을 이용한 filter 기능 수행
    }

    
    return (
        <div>
            <h2>전체 강의</h2>
            <section id="lectureCategorySection">
                <ul>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickIt}
                    ref={ref}
                    >IT 프로그래밍
                    {
                        (detailIt) ||
                        <ul>
                            <li onClick={clickCategory}>웹/앱</li>
                            <li onClick={clickCategory}>IT교양</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickFinance}
                    ref={ref}
                    >금융 제테크
                    {

                        (detailFinance)||
                        <ul>
                            <li onClick={clickCategory}>주식</li>
                            <li onClick={clickCategory}>제테크</li>
                            <li onClick={clickCategory}>부동산</li>
                            <li onClick={clickCategory}>창업</li>
                            <li onClick={clickCategory}>부업</li>
                        </ul>
                    }
                        
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickExercise}
                    ref={ref}
                    >운동
                    {
                        (detailExercise) ||
                        <ul>
                            <li onClick={clickCategory}>요가/필라테스</li>
                            <li onClick={clickCategory}>헬스</li>
                            <li onClick={clickCategory}>기타</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickBusiness}
                    ref={ref}
                    >비즈니스
                    {
                        (detailBusiness) ||
                        <ul>
                            <li onClick={clickCategory}>사업</li>
                            <li onClick={clickCategory}>창업</li>
                            <li onClick={clickCategory}>CEO</li>
                        </ul>
                    }
                        
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickMarketing}
                    ref={ref}
                    >마케팅
                    {
                        (detailMarketing) ||
                        <ul>
                            <li onClick={clickCategory}>광고</li>
                            <li onClick={clickCategory}>홍보</li>
                        </ul>
                    }
                        
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickArt}
                    ref={ref}
                    >미술
                    {
                        (detailArt)||
                        <ul>
                            <li onClick={clickCategory}>일러스트레이션</li>
                            <li onClick={clickCategory}>만화</li>
                            <li onClick={clickCategory}>포토샵</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickForeign}
                    ref={ref}
                    >외국어
                    {
                        (detailForeign)||
                        <ul>
                            <li onClick={clickCategory}>영어</li>
                            <li onClick={clickCategory}>제2 외국어</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickCook}
                    ref={ref}
                    >요리
                    {
                        (detailCook)||
                        <ul>
                            <li onClick={clickCategory}>요리</li>
                            <li onClick={clickCategory}>베이킹</li>
                            <li onClick={clickCategory}>음료 및 주류</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickLifeStyle}
                    ref={ref}
                    >라이프 스타일
                    {
                        (detailLifeStyle)||
                        <ul>
                            <li onClick={clickCategory}>법률</li>
                            <li onClick={clickCategory}>상담</li>
                            <li onClick={clickCategory}>뷰티</li>
                            <li onClick={clickCategory}>기타</li>
                        </ul>
                    }
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LectureCategory;