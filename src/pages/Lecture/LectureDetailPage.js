import React,{useState,useEffect} from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import '../../style/pages/Lecture/LectureDetailPage.css';
import { useLocation } from 'react-router-dom';
import LectureLeft from '../../components/LecturePage/LectureLeft';
import LectureRight from '../../components/LecturePage/LectureRight';

const LectureDetailPage = () => {
    const location = useLocation();
    const lectureId = location.state.lecture[0].lectureId;
    const lectureTitle = location.state.lecture[0].lectureTitle;
    const lectureImg = location.state.lecture[0].lectureImg;
    const lecturePrice = location.state.lecture[0].lecturePrice;
    const [purchaseStatus,setPurchaseStatus] = useState(false);
    const [myLecutureStatus,setMyLectureStatus] = useState(false);
    const [classModify,setClassModify] = useState(false);
    const [likeState,setLikeState] = useState(false);
    const [likeCount,setLikeCount] = useState(0);

    useEffect(()=>{
        //강의를 구매하였는지에 대한 state 실행
    },[purchaseStatus]);

    useEffect(()=>{
        //나의 강의 인지에 대한 state 실행
    },[myLecutureStatus]);

    const clickRegistration = ()=>{
        console.log('강의 신청 폼 or 페이지 or 모달 이동');
    };
    const clickWatch = ()=>{
        console.log('강의시청 유튜브 링크이동');
        window.open('https://www.youtube.com/watch?v=bTyqCL-ykHQ&list=PLF21Q5z3jPfMNLUS2E1hmDDBPVjU2od7O','_blank');
    };
    const clickLectureModify = ()=>{
        console.log('강의 수정 로직 실행');
        
        setClassModify(!classModify);
    };
    const myLecture = ()=>{
        setMyLectureStatus(!myLecutureStatus);
    };
    const purchaseLecture = ()=>{
        setPurchaseStatus(!purchaseStatus);
    };
    const clickUnFill = ()=>{
        if(!purchaseStatus){
            alert('먼저 강의를 구매하세요!');
        }else{
            setLikeState(!likeState);
            setLikeCount(likeCount + 1);
        }
    };
    const clickFill = ()=>{
        if(!purchaseStatus){
            alert('먼저 강의를 구매하세요!');
        }else{
            setLikeCount(likeCount - 1);
            setLikeState(!likeState);
        }
    };

    return (
        <div>
            <Header />
            <Navbar val={'lecture'}/>
            <div id="LectureDetailDiv">
                <section id="LectureLeftSection">
                    <LectureLeft lectureImg={lectureImg} classModify={classModify} lectureTitle={lectureTitle} />
                </section>
                <section id="LectureRightSection">
                    
                    {/*클래스 수정/시청/신청 잘 돌아가는지 확인용, 통신하고 구현하면 지울것*/}
                    --로직 확인용
                    <button type="button" onClick={myLecture}>나의 강의</button>
                    <button type="button" onClick={purchaseLecture}>구매한 강의</button> 로직 확인용--

                    <LectureRight lectureId={lectureId} lectureTitle={lectureTitle} lecturePrice={lecturePrice} />
                    {/* 조건
                    1. 로그아웃 상태일때 , 하트는 빈하트, 좋아요 수는 표시해준다.
                    2. 로그인 상태일때,
                      1) 구매를 했다면, 하트를 누를 수 있도록 한다.
                      2) 구매를 하지 않았다면, 하트를 못누르도록 하고 빈하트로만 표시한다.
                      3) 나의 강의라면?
                        1- 구매를 하지 않은 상태처럼 표시한다. (자기거에 좋아요 누를 수 없음) */}
                    <article id="likeArticle">
                    {
                        (likeState)?
                        <img onClick={clickFill} src='/img/fillHeart.png' alt='하트' />:
                        <img onClick={clickUnFill} src='/img/unfillHeart.png' alt='빈하트' />
                    }
                    <span>{likeCount}</span>
                    </article>
                    {
                        (myLecutureStatus)?
                        <button type="button" onClick={clickLectureModify}>클래스 수정하기</button>:
                        (purchaseStatus)?
                        <button type="button" onClick={clickWatch}>클래스 시청하기</button>:
                        <button type="button" onClick={clickRegistration}>클래스 신청하기</button>
                    }

                    
                </section>
            </div>
        </div>
    );
};

export default LectureDetailPage;