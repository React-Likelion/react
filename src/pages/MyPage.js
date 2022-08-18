import React, {useState} from 'react';
import '../style/pages/MyPage.css';
import Header from './../components/Header';
import Footer from '../components/Footer.js';
import MyTopBox from '../components/Mypage/MyTopBox';
import MyBottomBox from '../components/Mypage/MyBottomBox';


const MyPage = () => {

    const [mypageInfo] = useState({
        'lecture' : ['수강중인 강의', '등록한 강의'],
        'club' : ['가입된 동호회', '개설한 동호회'],
        'mentoring' : ['가입된 멘토멘티', '개설한 멘토멘티'],
        'community' : ['내가 쓴 글']
    });

    const [selected, setSelected] = useState('lecture');

    const handleCategory = (e) => {
        setSelected(e.currentTarget.id);
    }

    return (
        <>
            <Header />
            <section className='my-container'>
                <article id='left-side'>
                    <div><img src='' alt='이미지 없음'/></div>
                    <div>사용자</div>
                    <div id='point'><img src={`${process.env.PUBLIC_URL}/img/coin.png`}/>10,000 P</div>
                    <div>포인트 충전하기</div><br/>
                    <span>내 정보</span>
                    <div></div>
                    <ul>
                        <li id='lecture' className={selected === 'lecture' && 'selected'} onClick={handleCategory}>내 강의</li>
                        <li id='club' className={selected === 'club' && 'selected'} onClick={handleCategory}>내 동호회</li>
                        <li id='mentoring' className={selected === 'mentoring' && 'selected'} onClick={handleCategory}>내 멘토멘티</li>
                        <li id='community' className={selected === 'community' && 'selected'} onClick={handleCategory}>내 커뮤니티</li>
                    </ul>
                    <div id='signout'>회원탈퇴</div>
                </article>
                <article id='right-side'>
                    <div>&nbsp;&nbsp;&nbsp;{mypageInfo[`${selected}`][0]}</div>
                    <MyTopBox category={selected}/>
                    <div>&nbsp;&nbsp;&nbsp;{mypageInfo[`${selected}`][1]}</div>
                    <MyBottomBox category={selected}/>
                </article>
            </section>
            <Footer/>
        </>
    );
};

export default MyPage;