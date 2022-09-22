import React,{useState, useRef} from 'react';
import '../../style/components/LecturePage/LectureCategory.css';

const LectureCategory = ({setDetailCategoryData,setCategoryData,categoryData,handleClose}) => {
    const [detailIt,setDetailIt] = useState(true);
    const [detailFinance,setDetailFinance] = useState(true);
    const [detailExercise,setDetailExercise] = useState(true);
    const [detailBusiness,setDetailBusiness] = useState(true);
    const [detailMusic,setDetailMusic] = useState(true);
    const [detailArt,setDetailArt] = useState(true);
    const [detailForeign,setDetailForeign] = useState(true);
    const [detailCook,setDetailCook] = useState(true);
    const [detailLifeStyle,setDetailLifeStyle] = useState(true);
    const [detailFounded,setDetailFounded] = useState(true);
    const [detailPicture,setDetailPicture] = useState(true);

    const ref = useRef();
    const infoArray = [
        '프로그래밍',
        '금융/제테크',
        '사진/영상',
        '비즈니스/마케팅',
        '창업/부업',
        '미술',
        '외국어',
        '요리',
        '운동',
        '라이프 스타일',
        '음악',
    ];
    
    const clickIt = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailIt(!detailIt);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailFinance(!detailFinance);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailExercise(!detailExercise);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailBusiness(!detailBusiness);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailArt(!detailArt);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailCook(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailForeign(!detailForeign);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailLifeStyle(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailCook(!detailCook);
        const categoryDataBool = categoryData==='';
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
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailFounded(true);

        setDetailLifeStyle(!detailLifeStyle);
        const categoryDataBool = categoryData==='';
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
    const clickMusic = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailIt(true);
        setDetailFounded(true);
        setDetailLifeStyle(true);

        setDetailMusic(!detailMusic);
        const categoryDataBool = categoryData==='';
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
    
    const clickFounded = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailPicture(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailIt(true);
        setDetailMusic(true);
        setDetailLifeStyle(true);

        setDetailFounded(!detailFounded);
        const categoryDataBool = categoryData==='';
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

    const clickPicture = (e)=>{
        setDetailFinance(true);
        setDetailExercise(true);
        setDetailBusiness(true);
        setDetailMusic(true);
        setDetailArt(true);
        setDetailForeign(true);
        setDetailCook(true);
        setDetailIt(true);
        setDetailFounded(true);
        setDetailLifeStyle(true);

        setDetailPicture(!detailPicture);
        const categoryDataBool = categoryData==='';
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

    const clickCategory = (e)=>{
        const lectureCategory = e.target.innerHTML;
        setDetailCategoryData(lectureCategory);
        handleClose();
        //클릭한 Category값을 이용한 filter 기능 수행
    };

    
    return (
        <div id="lectureCategoryDiv">
            <h2>전체 강의</h2>
            <section id="lectureCategorySection">
                <ul>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickIt}
                    ref={ref}
                    >프로그래밍
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
                    >금융/제테크
                    {

                        (detailFinance)||
                        <ul>
                            <li onClick={clickCategory}>주식</li>
                            <li onClick={clickCategory}>제테크</li>
                            <li onClick={clickCategory}>부동산</li>
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
                            <li onClick={clickCategory}>운동기타</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickBusiness}
                    ref={ref}
                    >비즈니스/마케팅
                    {
                        (detailBusiness) ||
                        <ul>
                            <li onClick={clickCategory}>비즈니스</li>
                            <li onClick={clickCategory}>마케팅</li>
                            <li onClick={clickCategory}>비즈니스/마케팅기타</li>
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
                            <li onClick={clickCategory}>그림</li>
                            <li onClick={clickCategory}>공예</li>
                            <li onClick={clickCategory}>디자인</li>
                            <li onClick={clickCategory}>미술기타</li>
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
                            <li onClick={clickCategory}>외국어</li>
                            <li onClick={clickCategory}>제2외국어</li>
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
                            <li onClick={clickCategory}>요리기타</li>
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
                            <li onClick={clickCategory}>라이프스타일기타</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickMusic}
                    ref={ref}
                    >음악
                    {
                        (detailMusic)||
                        <ul>
                            <li onClick={clickCategory}>힙합</li>
                            <li onClick={clickCategory}>발라드</li>
                            <li onClick={clickCategory}>국악</li>
                            <li onClick={clickCategory}>악기</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickPicture}
                    ref={ref}
                    >사진/영상
                    {
                        (detailPicture)||
                        <ul>
                            <li onClick={clickCategory}>사진</li>
                            <li onClick={clickCategory}>영상</li>
                            <li onClick={clickCategory}>사진/영상기타</li>
                        </ul>
                    }
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickFounded}
                    ref={ref}
                    >창업/부업
                    {
                        (detailFounded)||
                        <ul>
                            <li onClick={clickCategory}>창업</li>
                            <li onClick={clickCategory}>부업</li>
                            <li onClick={clickCategory}>창업/부업기타</li>
                        </ul>
                    }
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LectureCategory;