import React,{useState, useRef} from 'react';
import '../../style/components/LecturePage/LectureCategory.css';

const LectureCategory = ({setDetailCategoryData,setCategoryData,categoryData}) => {
    const [detailIt,setDetailIt] = useState(true);
    const [detailFinance,setDetailFinance] = useState(true);
    const [detailProductPlan,setDetailProductPlan] = useState(true);
    const [detailBusiness,setDetailBusiness] = useState(true);
    const [detailMarketing,setDetailMarketing] = useState(true);
    const [detailDesign,setDetailDesign] = useState(true);
    const [detailForeign,setDetailForeign] = useState(true);
    const ref = useRef();
    const infoArray = [
        'IT 프로그래밍',
        '금융 제테크',
        '제품 기획',
        '비즈니스',
        '마케팅',
        '디자인',
        '외국어',
    ];
    
    const clickIt = (e)=>{
        // console.log((e.target.innerHTML).split('<')[0]);
        //console.log(ref.current.__reactProps$fn9mcx9ek2k.children[0]);
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
    const clickProductPlan = (e)=>{
        setDetailProductPlan(!detailProductPlan);
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
    const clickDesign = (e)=>{
        setDetailDesign(!detailDesign);
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
                            <li onClick={clickCategory}>DevOps</li>
                            <li onClick={clickCategory}>WEB</li>
                            <li onClick={clickCategory}>Game</li>
                            <li onClick={clickCategory}>Network</li>
                            <li onClick={clickCategory}>Security</li>
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
                            <li onClick={clickCategory}>예금</li>
                            <li onClick={clickCategory}>적금</li>
                        </ul>
                    }
                        
                    </li>
                    <li
                    style={{cursor:'pointer'}}
                    onClick={clickProductPlan}
                    ref={ref}
                    >제품 기획
                    {
                        (detailProductPlan) ||
                        <ul>
                            <li onClick={clickCategory}>제품</li>
                            <li onClick={clickCategory}>기획</li>
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
                    onClick={clickDesign}
                    ref={ref}
                    >디자인
                    {
                        (detailDesign)||
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
                            <li onClick={clickCategory}>중국어</li>
                            <li onClick={clickCategory}>일본어</li>
                        </ul>
                    }
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default LectureCategory;