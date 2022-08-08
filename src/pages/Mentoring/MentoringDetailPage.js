import React from 'react';
import Header from './../../components/Header';
import '../../style/pages/Mentoring/MentoringDetailPage.css'
import { useParams } from 'react-router-dom';
import MentoringInfo from '../../components/MentoringPage/MentoringInfo';
import {dummyData} from '../../data/mentoringpage_info.js'


const MentoringDetailPage = () => {
    const params = useParams();
    const tmp_result = dummyData.filter((element)=>{return params.id === String(element.id)})

    // console.log(tmp_result[0])

        //먼저 멘토멘티 리스트 받아오기
    // axios.get(`/mentorings/${id}`)
    //     .then(response=>{
    //         if(response.data.success){
    //             setmentoringList()//가져온 모든 리스트를 배열에 저장한다. 
    //         }else{
    //             alert('멘토링 리스트를 가져오는데 실패했습니다.')
    //         }
    //     })
    return (
        <div>
            <Header />
            <MentoringInfo id={tmp_result[0].id} image={tmp_result[0].image} title={tmp_result[0].title} description={tmp_result[0].description} tag={tmp_result[0].tag} limit={tmp_result[0].limit} member_cnt={tmp_result[0].member_cnt}/>
        </div>
    );
};

export default MentoringDetailPage; 