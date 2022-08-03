import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage.js';
import MyPage from './pages/MyPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/my" element={<MyPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </>
  );
};

export default App;