import React, { useEffect } from 'react';

const Payment = (effect, deps) => {
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

    const onClickPayment = () => {
        const IMP = window.IMP;
        IMP.init('imp35117486');

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: '결제 테스트',
            amount: '1000',
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보',
            },
            buyer_name: '이수화',
            buyer_tel: '01012345678',
            buyer_email: '14279625@gmail.com',
            buyer_addr: '구천면로 000-00',
            buyer_postalcode: '01234',
        };

        IMP.request_pay(data, callback);
    };

    const callback = response => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

        if (success) {
            alert('결제 성공');
            console.log(paid_amount);
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    return (
        <div>
            <button onClick={onClickPayment}>결제하기</button>
        </div>
    );
};
export default Payment;