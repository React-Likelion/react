import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import "../../style/pages/Club/ClubDetailPage.css"
// import {PROXY} from '../../data/serverUrl';
import axios from 'axios';
import ClubInfo from './../../components/ClubPage/ClubInfo';
import ClubBoard from './../../components/ClubPage/ClubBoard';
import Header from './../../components/Header';
import Navbar from './../../components/Navbar';
import ClubChat from '../../components/ClubPage/ClubChat';
import ClubGallery from '../../components/ClubPage/ClubGallery';
import SearchBar from '../../components/SearchBar';


const ClubDetailPage = () => {
    const PROXY = process.env.REACT_APP_PROXY;
    let params = useParams();
    const navigate = useNavigate();
    const [id, setId] = useState(params.clubId);
    const [detailData, setDetailData] = useState([])
    const [articleData, setArticleData] = useState([])
    const [galleryData, setGalleryData] = useState([])
    const [search, setSearch] = useState("")

    console.log(search)

    console.log(detailData == [])

    // axios(`${PROXY}/club/${params.clubId}`) => 특정 동호회의 정보를 가져오기 위한 axios 
    // axios(`${PROXY}/club/${params.clubId}/articles`) => 특정 동호회의 게시글 가져오기 위한 axios 
    // 특정 동호회 정보, 게시글을 가져온 후 각 컴포넌트의 props 로 넘겨준다

    const goPhotoUpload = () => {
        navigate('pictureUpload', {state:{
            club_id: id
        }});
    }

    useEffect(() => {
        axios.get(`${PROXY}/clubs/${params.clubId}/`)
        .then((res) => {
            console.log(res)
            setDetailData(res.data)
        })
        .catch((err) => {
            alert("디테일 페이지 에러")
        })
        axios.get(`${PROXY}/clubs/${params.clubId}/galleries/`)
        .then((res) => {
            console.log(res)
            setGalleryData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        axios.get(`${PROXY}/clubs/${params.clubId}/articles/`)
        .then((res) => {
            console.log(res)
            setArticleData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios.get(`${PROXY}/clubs/${params.clubId}/articles/?title=${search}`)
        .then((res) => {
            setArticleData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [search])
    

    return (
        <section className='ClubDetailPage'>
            {
                console.log(detailData)
            }
            <Header/>
            <Navbar val={'club'}/>
            <div className='clubDeailContainer'>
                <div className='clubDetailLeft'>
                <div><ClubInfo params={params} name={detailData.name} member={detailData.member} image={detailData.image} leader={detailData.leader_id}/></div>
                    {(localStorage.getItem('react_accessToken')) ? <div className='clubImageUploadBtn' onClick={goPhotoUpload}><img src={`${process.env.PUBLIC_URL}/img/Teacher.png`} alt=''/>사진 업로드하기</div> : ""}
                </div>
                {
                detailData == [] ?  
                    <div className='clubDetailCenter'>
                        <ClubBoard articleData={articleData} />
                        <SearchBar setSearch={setSearch} />
                    </div>
                    : <p className='noArticle'>등록된 글이 없습니다.</p>
                }
                <div className='clubDetailRight'>
                    <ClubChat id={params.clubId} title={detailData.name}/>
                    <ClubGallery galleryData={galleryData} />
                </div>
            </div>
        </section>
    );
};

export default ClubDetailPage;