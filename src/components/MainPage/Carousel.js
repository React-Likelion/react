import React from 'react';
import { Carousel } from 'react-bootstrap';

// 캐러셀 이라는 부트스트랩 예시 이용 -> 회전목마 구현
const Product = () => {
    return (
        <div style={{width:'40%', margin:'auto'}}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src='{props.product.image}'
                    alt="사진1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/400x400?text=Second slide&bg=282c34"
                    alt="사진2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/400x400?text=Third slide&bg=20232a"
                    alt="사진3"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Product;