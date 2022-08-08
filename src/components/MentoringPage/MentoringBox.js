import React from 'react';
import MentoringItem from './MentoringItem';
import '../../style/components/MentoringPage/MentoringBox.css'

function MentoringBox() {
    const dummyData = [
        {
        "id": 1,
        "location": "지역1",
        "field": "분야1",
        "title": "사업계획서 기획에서 창업 지원사업까지 🚀",
        "description": "예비 창업자, 창업에 관심있는 분들~ 수많은 창업지원사업들을 선별하여 매주 추천해드립니다!!",
        "age_group": 5,
        "limit": 5,
        "tag": "태그1",
        "image": "이미지1",
        "member": 2,
        "member_cnt": 5
        },
        {
        "id": 2,
        "location": "지역2",
        "field": "분야2",
        "title": "비즈니스 문서 Q&A 방 _ 20년 실무 내공...",
        "description": "하루에도 수없이 열고 닫는 각종 비즈니스 문서들 ... 보고서, 기획서, 이메일, 등 ... 이 방을 통해 모두들 스킬업해요!!!",
        "age_group": 5,
        "limit": 20,
        "tag": "태그2",
        "image": "이미지2",
        "member": null,
        "member_cnt": 8
        },
        {
        "id": 3,
        "location": "지역3",
        "field": "분야3",
        "title": "부동산 투자 할 것, 이슈",
        "description": "이런 저런 다양한 부동산 주제를 이야기 해보아요~",
        "age_group": 5,
        "limit": 50,
        "tag": "태그3",
        "image": "이미지3",
        "member": null,
        "member_cnt": 32
        },
        {
        "id": 4,
        "location": "지역4",
        "field": "분야4",
        "title": "브래든이 추천하는 알짜 외국계 기업",
        "description": "외국계기업 전문가 브랜든이 알짜배기 외국계기업을 엄선하여 매주 채용정보를 올려드립니다.",
        "age_group": 5,
        "limit": 20,
        "tag": "태그4",
        "image": "이미지4",
        "member": null,
        "member_cnt": 19
        },
        {
        "id": 5,
        "location": "지역5",
        "field": "분야5",
        "title": "제목5",
        "description": "내용5",
        "age_group": 5,
        "limit": 5,
        "tag": "태그5",
        "image": "이미지5",
        "member": null,
        "member_cnt": 5
        },
        {
        "id": 6,
        "location": "지역6",
        "field": "분야6",
        "title": "제목6",
        "description": "내용6",
        "age_group": 5,
        "limit": 5,
        "tag": "태그6",
        "image": "이미지6",
        "member": null,
        "member_cnt": 5
        },
        ]
    /* 
    const [mentoringList, setmentoringList] = useState([])

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
    }, [])
    */

    return (
        <div className='mentoringBox' >
            {
                dummyData.map((element)=>{
                    return <MentoringItem id={element.id} image={element.image} title={element.title} description={element.description} tag={element.tag} limit={element.limit} member_cnt={element.member_cnt}/>
                })
            }
        </div>
    );
}

export default MentoringBox;