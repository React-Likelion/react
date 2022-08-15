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
    const [option,setOption] = useState('최신순');

    const optionList = [
        "최신순", "인기순"
    ];
    const optionHandler = (e) => {
        console.log(e.target.value);
        setOption(e.target.value);
        //정렬 값 받아서 정렬하기
    };

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
                    <div id="selecBoxDiv">
                    <select onChange={optionHandler} id='selectBox'/*value={option}*/>
                        <option disabled>정렬</option>
                        {
                            optionList.map((op,i) => (
                                <option value={op} key={i}>
                                    {op}
                                </option>
                            ))
                        }
                        </select>
                    </div>
                        
                    <LectureBox categoryData={categoryData} detailCategoryData={detailCategoryData} option={option} />
                </section>
            </div>
        </div>
    );
};

export default LecturePage;