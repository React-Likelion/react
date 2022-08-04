import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage.js';
import MyPage from './pages/MyPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import SearchBar from './components/SearchBar';
import ConsultingPage from './pages/Consulting/ConsultingPage';
import CommunityPage from './pages/Community/CommunityPage';
import ClubPage from './pages/Club/ClubPage';
import LecturePage from './pages/Lecture/LecturePage';
import MentoringPage from './pages/Mentoring/MentoringPage';
import MentoringUploadPage from './pages/Mentoring/MentoringUploadPage';
import MentoringDetailPage from './pages/Mentoring/MentoringDetailPage';


const App = () => {
  
console.log('______                            _   ');
console.log('| ___ ＼          _              | |  ');
console.log('| |_/  /    ___  (_)  __ _   ___ | |_ ');
console.log('|     /   /  _ ＼    / _` | / __|| __|');
console.log('|  |＼＼  |  __/  _ | (_| || (__ | |_ ');
console.log('＼_| ＼_| ＼___| (_) ＼__,_| ＼___| ＼__|');
console.log('%c 금오공대 멋쟁이 사자처럼', 'font-size:50px; color:orange;');
console.log('%c @likelionkumoh', 'font-size:25px; color:orange;');
console.log('%c https://www.instagram.com/likelionkumoh/', 'font-size:25px;')

  return (
    <section className='appcontainer'>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/my" element={<MyPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='/lecture' element={<LecturePage/>}/>
        <Route path='/mentoring/*' element={<Mentoring/>}/>
        <Route path='/club' element={<ClubPage/>}/>
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path='/consulting' element={<ConsultingPage/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </section>
  );
};

export default App;

function Mentoring() {
  return (
    ///mentoring/* => 와일드 카드 형태, 라우터 중첩시 사용
      <Routes>
          <Route path='' element={<MentoringPage/>}/>
          <Route path='upload' element={<MentoringUploadPage/>}/>
          <Route path='detail' element={<MentoringDetailPage/>}/>
      </Routes>
  );
};
