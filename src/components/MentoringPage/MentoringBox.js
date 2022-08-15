import React, {useState, useEffect} from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'
import axios from "axios";
import { PROXY } from '../../data/serverUrl';

function MentoringBox({sortValue}) {
    const [mentoringList, setmentoringList] = useState([]);

    console.log(`${PROXY}/mentorings/${sortValue}`)

    useEffect(() => {
        //먼저 멘토멘티 리스트 받아오기
        axios.get(`${PROXY}/mentorings/${sortValue}`)
            .then((res)=>{
                if(res.data){
                    setmentoringList(res.data);//가져온 모든 리스트를 배열에 저장한다. 
                }else{
                    alert('멘토링 리스트를 가져오는데 실패했습니다.')
                }
            })
    }, [sortValue]);

console.log(mentoringList)
console.log('정렬 값 :',sortValue);

    return (
        <div className='mentoringBox' >
            {
                mentoringList.map((element)=>{
                    return <MentoringItem id={element.id} image={element.image} title={element.title} description={element.description} tag1={element.tag} tag2={element.tag2} tag3={element.tag3} limit={element.limit} member_cnt={element.member_cnt}/>
                })
            }
        </div>
    );
}

export default MentoringBox;