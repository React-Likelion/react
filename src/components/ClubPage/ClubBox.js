import React from 'react';
import "../../style/components/ClubPage/ClubBox.css"
import ClubItem from './ClubItem';

const ClubBox = ({datas}) => {
    return (
        <section className='clubBox'>
            {
                datas&&datas.map((item, idx) => 
                    <ClubItem item={item} idx={idx}/>
                )
            }
        </section>
    );
}

export default ClubBox;