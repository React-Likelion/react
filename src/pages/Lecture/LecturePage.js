import React,{useState} from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import LectureCategory from '../../components/LecturePage/LectureCategory';
import '../../style/pages/Lecture/LecturePage.css';
import LectureBox from '../../components/LecturePage/LectureBox';
import Modal from 'react-bootstrap/Modal';
import SearchBar from '../../components/SearchBar';

const LecturePage = () => {
    const [categoryData, setCategoryData] = useState('');
    const [detailCategoryData,setDetailCategoryData] = useState('');
    const categoryDataBool = (categoryData==='');
    const detailCategoryDataBool = (detailCategoryData==='');
    const [applicationModal,setApplicationModal] = useState(false);

    const handleClose = () => setApplicationModal(false);
    const handleShow = () => setApplicationModal(true);

    return (
        <div id="lecturePageDiv">
            <Header />
            <Navbar val={'lecture'}/>
            <div id="lectureContainerBox">
                <section id="lectureLeftContainer">
                    <article id="lectureLeftCategory">
                        <LectureCategory setDetailCategoryData={setDetailCategoryData} setCategoryData={setCategoryData} categoryData={categoryData} handleClose={handleClose} />
                    </article>
                    <article id="lectureLeftCategoryModal">
                    {
                        (applicationModal) ?
                        <Modal className="modal-container" show={applicationModal} onHide={handleClose}>
                        <LectureCategory setDetailCategoryData={setDetailCategoryData} setCategoryData={setCategoryData} categoryData={categoryData} handleClose={handleClose} />
                        </Modal>:

                        <img id="categoryIcon" onClick={handleShow} src='/img/CategoryIcon.png' alt='카테고리 아이콘' />
                    }
                    </article>
                </section>
                <section id="lectureRightContainer">
                    <div id="lectureRightContainerHeader">
                        <section>
                        {
                        (categoryDataBool)?
                        <span>전체강의</span>:(detailCategoryDataBool)?
                        <span>전체강의&gt;{categoryData}</span>:
                        <span>전체강의&gt;{categoryData}&gt;{detailCategoryData}</span>
                        }
                        </section>
                        <article>
                        <SearchBar />
                        </article>
                    </div>
                    <LectureBox categoryData={categoryData} detailCategoryData={detailCategoryData} />
                </section>
            </div>
        </div>
    );
};

export default LecturePage;