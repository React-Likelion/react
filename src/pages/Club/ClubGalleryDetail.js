import React, {useState} from "react";
import Header from "../../components/Header";
import Navbar from '../../components/Navbar';
import "../../style/pages/Club/ClubGalleryDetail.css"
import Modal from 'react-bootstrap/Modal';

const ClubGalleryDetail = () => {
    const [clubGalleryDetailModal, setClubGalleryDetailModal] = useState(false);

    const modalHandle = () => {
        setClubGalleryDetailModal(!clubGalleryDetailModal);
    }
    const clubGalleryDetailhandleClose = () => {
        setClubGalleryDetailModal(false)
    }

    return (
        <setion className="ClubGalleryDetail">
            <Header/>
            <Navbar/>
            <div className="clubGalleryDetailContainer">
                <div className="clubGalleryDetailBox">
                    <img onClick={modalHandle} className='clubGalleryDetailImg' src={`${process.env.PUBLIC_URL}/img/Example.png`}/>
                    <p className="clubGalleryDetailTitlle">오늘 저녁은 고기를 먹었따.</p>
                </div>
            </div>

            {
                (!clubGalleryDetailModal) || <div id="modalDiv">
                        <Modal className="modal-container" show={clubGalleryDetailModal} onHide={clubGalleryDetailhandleClose}>
                            <img src={`${process.env.PUBLIC_URL}/img/Example.png`} alt="클럽 디테일 이미지"/><br/>
                            <p>&nbsp;오늘 저녁은 고기를 먹었따.</p>
                            <hr/>
                            <button id="clubGalleryDetailBtn" type="button" onClick={clubGalleryDetailhandleClose}>닫기</button>
                        </Modal>
                    </div>
            }

        </setion>
    );
}

export default ClubGalleryDetail;