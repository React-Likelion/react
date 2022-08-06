import React from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'
import { useNavigate } from 'react-router-dom';

function MentoringBox() {
    const navigate = useNavigate();

    const onClickItemBox = () => {
        navigate('/mentoring/detail')
    }
    return (
        <div className='mentoringBox' onClick={onClickItemBox}>
            {/* {
                데이터명.map((element) => (
                    <MentoringItem props/>
                ))
            } */}
                <MentoringItem />
                <MentoringItem />
                <MentoringItem />
        </div>
    );
}

export default MentoringBox;