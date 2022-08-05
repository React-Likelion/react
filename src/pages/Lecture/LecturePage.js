import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import LectureCategory from '../../components/LecturePage/LectureCategory';
import '../../style/pages/Lecture/LecturePage.css';

const LecturePage = () => {
    return (
        <div id="lecturePageDiv">
            <Header />
            <Navbar />
            <div id="lectureContainerBox">
                <section id="lectureLeftContainer">
                    <LectureCategory />
                </section>
                <section id="lectureRightContainer">

                </section>
            </div>
        </div>
    );
};

export default LecturePage;