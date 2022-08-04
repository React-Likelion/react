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
import Mentoring from './components/Mentoring';


const App = () => {
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
