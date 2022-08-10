import React from 'react';
import "../../style/components/ClubPage/ClubGallery.css"
import { useNavigate } from 'react-router-dom';

const ClubGallery = () => {

    const navigate = useNavigate();

    const goClubGalleryDetail = () => {
        navigate('galleryDetail')
    }

    return (
        <section>
            <div className='clubGalleryContainer'>
                <div className='clubGalleryHeader'>
                    <p className='clubGalleryTitle'>갤러리</p>
                    <div onClick={goClubGalleryDetail} className='clubGalleryMore'>+ 더보기</div>
                </div>
                <div className='clubGalleryPhotos'>
                    <img className='clubGalleryImg' src={`${process.env.PUBLIC_URL}/img/Example.png`} />
                    <img className='clubGalleryImg' src={`${process.env.PUBLIC_URL}/img/Example.png`} />
                    <img className='clubGalleryImg' src={`${process.env.PUBLIC_URL}/img/Example.png`} />
                    <img className='clubGalleryImg' src={`${process.env.PUBLIC_URL}/img/Example.png`} />
                </div>
                {/* 여기서는 axios해서 사진들 받아오고 앞 4개만 뿌릴 거임. 배열 인덱스 0, 1, 2, 3 */}
            </div>
        </section>
    );
}

export default ClubGallery;