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