import React, {useState, useEffect} from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'
import axios from "axios";
// import { PROXY } from '../../data/serverUrl';

function MentoringBox({list}) {
    const PROXY = process.env.REACT_APP_PROXY;
    console.log(list)

    return (
        <div className='mentoringBox' >
            {
                list.map((element)=>{
                    return <MentoringItem id={element.id} image={element.image} title={element.title} description={element.description} tag1={element.tag} tag2={element.tag2} tag3={element.tag3} nickname={element.nickname} limit={element.limit} member_cnt={element.member_cnt}/>
                })
            }
        </div>
    );
}

export default MentoringBox;