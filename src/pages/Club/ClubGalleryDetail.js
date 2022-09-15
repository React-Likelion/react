import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import Navbar from '../../components/Navbar';
import "../../style/pages/Club/ClubGalleryDetail.css"
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';

const ClubGalleryDetail = () => {
    const {state} = useLocation();
    // console.log(state.data)

    const [galleryAllData, setGalleryAllData] = useState([])
    const [galleryModal, setGalleryModal] = useState()
    const [clubGalleryDetailModal, setClubGalleryDetailModal] = useState(false);

    const modalHandle = (e) => {
        setClubGalleryDetailModal(!clubGalleryDetailModal);
        setGalleryModal(e.target.id);
    }
    const clubGalleryDetailhandleClose = () => {
        setClubGalleryDetailModal(false)
    }

    useEffect(() => {
        setGalleryAllData(state.data)
    }, [])

    console.log(galleryAllData)
    console.log(galleryModal)

    return (
        <setion className="ClubGalleryDetail">
            <Header/>
            <Navbar val="club"/>
            <div className="clubGalleryDetailContainer">
            {
                galleryAllData.map((It, idx) => 
                    <div className="clubGalleryDetailBox">
                        <img onClick={modalHandle} id={idx} className='clubGalleryDetailImg' src={It.image}/>
                        <p className="clubGalleryDetailTitlle">{It.title}</p>
                        <div className='clubGalleryImgDelete'>사진 삭제하기</div>
                    </div>
                )
            }
            </div>

            {
                (!clubGalleryDetailModal) || 
                    <div id="modalDiv">
                        <Modal className="modal-container" show={clubGalleryDetailModal} onHide={clubGalleryDetailhandleClose}>
                            <img src={galleryAllData[galleryModal].image} alt="클럽 디테일 이미지"/><br/>
                            <p>&nbsp;{galleryAllData[galleryModal].title}</p>
                            <hr/>
                            <button id="clubGalleryDetailBtn" type="button" onClick={clubGalleryDetailhandleClose}>닫기</button>
                        </Modal>
                    </div>
            }

        </setion>
    );
}

export default ClubGalleryDetail;