import React, {useState,useEffect} from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'
import axios from "axios";

function MentoringBox() {
    const [mentoringList, setmentoringList] = useState([]);

    useEffect(() => {
        //먼저 멘토멘티 리스트 받아오기
        axios.get('/mentorings/')
            .then(response=>{
                if(response.data.success){
                    setmentoringList()//가져온 모든 리스트를 배열에 저장한다. 
                }else{
                    alert('멘토링 리스트를 가져오는데 실패했습니다.')
                }
            })
    }, []);

    return (
        <div className='mentoringBox' >
            {
                mentoringList.map((element)=>{
                    return <MentoringItem id={element.id} image={element.image} title={element.title} description={element.description} tag={element.tag} limit={element.limit} member_cnt={element.member_cnt}/>
                })
            }
        </div>
    );
}

export default MentoringBox;