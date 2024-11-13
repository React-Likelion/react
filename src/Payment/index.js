import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = (effect, deps) => {

    const [show, setShow] = useState(false);
    const [point, setPoint] = useState('');
    const PROXY = process.env.REACT_APP_PROXY;
    const navigate = useNavigate();
    
    useEffect(() => {
        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.2.0.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const handlePoint = (e) => {
        setPoint(e.target.value);
    }


    const goPayment = () => {
        console.log(Number(point));
        if(point === '') {
            alert('금액은 0원 이상의 숫자로 입력해주세요.');
            return;
        }

        const IMP = window.IMP;
        IMP.init('imp35117486');

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: '포인트 충전하기',
            amount: point,
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보',
            },
            buyer_name: '이수화',
            buyer_tel: '01012345678',
            buyer_email: localStorage.getItem('react_email'),
            buyer_addr: '구천면로 000-00',
            buyer_postalcode: '01234',
        };

        IMP.request_pay(data, callback);
    };

    const callback = response => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

        if (success) {

            // 백으로 포인트 보내기
            axios.patch(`${PROXY}/accounts/point/1/`, {
                point: paid_amount
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('react_accessToken')
                }
            })
            .then((res) => {
                alert(`${paid_amount}원 결제 성공하였습니다.`);
                navigate('/my');
            })
            .catch((err) => {
                console.log(err);
            })
            
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    const Style = {
        btn : {
            'fontSize': '13px',
            'lineHeight': '25px',
            'borderBottom': '1px solid #2E493A',
            'color': '#2E493A',
            'margin': '5px auto',
            'width': '100px',
            'cursor': 'pointer'
        },
        pointBox : {
            'width': '100%',
            'height': '120px'
        }, 
        input: {
            'width': '90%',
            'height': '40px',
            'display': 'block',
            'margin': '0 auto',
            'border': '2px solid #2E493a',
            'borderRadius': '10px',
            'outline': 'none'
        },
        gopay: {
            'width': '90%',
            'height': '40px',
            'display': 'block',
            'margin': '10px auto',
            'backgroundColor': '#2E493A',
            'borderRadius': '10px',
            'outline': 'none',
            'border': 'none',
            'color': '#fff'
        }
    }

    return (
        <>
            <div style={Style.btn} onClick={()=>setShow(true)}>포인트 충전하기</div>
            <Modal centered show={show} onHide={()=>setShow(false)}>
                <Modal.Header>
                    <div></div>
                    <span>포인트 충전하기</span>
                    <div id='close-icon' onClick={()=>setShow(false)}>x</div>
                </Modal.Header>
                <Modal.Body>
                   {
                       show &&
                       <div style={Style.pointBox}>
                           <input style={Style.input} type='text' value={point} onChange={handlePoint} placeholder='   충전할 포인트를 입력해 주세요'/>
                           <button onClick={goPayment} style={Style.gopay}>충전하기</button>
                        </div>
                   }
                </Modal.Body>
            </Modal>
        </>
    );
};
export default Payment;