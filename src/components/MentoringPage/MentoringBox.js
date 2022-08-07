import React from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'

function MentoringBox() {

    
    return (
        <div className='mentoringBox' >
            {/* {
                데이터명.map((element) => (
                    <MentoringItem props/>
                ))
            } */}
                <MentoringItem />
                <MentoringItem />
                <MentoringItem />
                <MentoringItem />
        </div>
    );
}

export default MentoringBox;