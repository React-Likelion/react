import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../style/components/MainPage/MainCarousel.css';

// 캐러셀 이라는 부트스트랩 예시 이용 -> 회전목마 구현
const MainCarousel = () => {
    return (
        <div style={{width:'80%', height:'auto', margin:'auto'}}>
            <Carousel >
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src='/img/main.png'
                    alt="사진1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/img/main.png"
                    alt="사진2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/img/main.png"
                    alt="사진3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainCarousel;