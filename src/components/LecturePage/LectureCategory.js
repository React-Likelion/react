import React,{useState, useRef} from 'react';
import '../../style/components/LecturePage/LectureCategory.css';

const LectureCategory = () => {
    const [detailIt,setDetailIt] = useState(true);
    const [detailFinance,setDetailFinance] = useState(true);
    const [detailProductPlan,setDetailProductPlan] = useState(true);
    const [detailBusiness,setDetailBusiness] = useState(true);
    const [detailMarketing,setDetailMarketing] = useState(true);
    const [detailDesign,setDetailDesign] = useState(true);
    const [detailForeign,setDetailForeign] = useState(true);
    const ref = useRef();
    
    const clickIt = (e)=>{
        // console.log((e.target.innerHTML).split('<')[0]);
        // console.log(ref.current.__reactProps$fn9mcx9ek2k.children[0]);

        setDetailIt(!detailIt);
    };
    const clickFinance = ()=>{
        setDetailFinance(!detailFinance);
    };
    const clickProductPlan = ()=>{
        setDetailProductPlan(!detailProductPlan);
    };
    const clickBusiness = ()=>{
        setDetailBusiness(!detailBusiness);
    };
    const clickMarketing = ()=>{
        setDetailMarketing(!detailMarketing);
    };
    const clickDesign = ()=>{
        setDetailDesign(!detailDesign);
    };
    const clickForeign = ()=>{
        setDetailForeign(!detailForeign);
    };
    const clickCategory = (e)=>{
        const lectureCategory = e.target.innerHTML;
        console.log(lectureCategory);
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