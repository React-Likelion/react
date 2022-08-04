import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MentoringUploadPage from '../pages/Mentoring/MentoringUploadPage';
import MentoringDetailPage from './../pages/Mentoring/MentoringDetailPage';
import MentoringPage from './../pages/Mentoring/MentoringPage';

const Mentoring = () => {
    return (
        <Routes>
            <Route path='' element={<MentoringPage/>}/>
            <Route path='upload' element={<MentoringUploadPage/>}/>
            <Route path='detail' element={<MentoringDetailPage/>}/>
        </Routes>
    );
};

export default Mentoring;