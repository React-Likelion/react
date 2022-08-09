import React,{useState} from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import LectureCategory from '../../components/LecturePage/LectureCategory';
import '../../style/pages/Lecture/LecturePage.css';
import LectureBox from '../../components/LecturePage/LectureBox';

const LecturePage = () => {
    const [categoryData, setCategoryData] = useState('');
    const [detailCategoryData,setDetailCategoryData] = useState('');
    const categoryDataBool = (categoryData==='');
    const detailCategoryDataBool = (detailCategoryData==='');

    return (
        <div id="lecturePageDiv">
            <Header />
            <Navbar val={'lecture'}/>
            <div id="lectureContainerBox">
                <section id="lectureLeftContainer">
                    <LectureCategory setDetailCategoryData={setDetailCategoryData} setCategoryData={setCategoryData} categoryData={categoryData} />
                </section>
                <section id="lectureRightContainer">
                    {
                        (categoryDataBool)?
                        <span>전체강의</span>:(detailCategoryDataBool)?
                        <span>전체강의&gt;{categoryData}</span>:
                        <span>전체강의&gt;{categoryData}&gt;{detailCategoryData}</span>
                    }
                    <LectureBox />
                </section>
            </div>
        </div>
    );
};

export default LecturePage;