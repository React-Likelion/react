import React,{ useState, useEffect } from 'react';
import Header from './../../components/Header';
import Navbar from '../../components/Navbar';
import MentoringBox from './../../components/MentoringPage/MentoringBox';
import '../../style/pages/Mentoring/MentoringPage.css'
import { useNavigate } from 'react-router-dom';
import Filter from './../../components/Filter';
import Footer from './../../components/Footer';
import SearchBar from './../../components/SearchBar';


const MentoringPage = () => {
    const navigate = useNavigate();
    
    const [sortValue,setSortValue] = useState('');
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('');

    const selectValue = (e) => {
        setSortValue(e.target.value);
    }

    const onClickBtnHandler = (e) => {
        navigate('upload');
    }

    useEffect(() => {
        setSearchType('mentoring')
    }, [])

    return (
        <div>
            <Header />
            <Navbar val={'mentoring'}/>
            <div className='postBtnBox'>
                <div className='searchBar'><SearchBar setSearch={setSearch} /></div>
                {localStorage.getItem('react_accessToken') &&
                <div className='postBtn' onClick={onClickBtnHandler}><img src='img/Teacher.png' alt=''/>멘토멘티 등록하기</div>}
            </div>
            <div>
                <Filter field="mentorings" search={search} sortValue={sortValue} searchType={searchType}/>
            </div>
            <div className='selectBar'>
                <select value={sortValue} onChange={selectValue} id='selectBox'>
                        <option disabled>정렬</option>
                        <option value="최신순">최신순</option>
                        <option value="인기순">인기순</option>
                </select>
            </div>
            <section className='viewSection'>
                <MentoringBox sortValue={sortValue}/>
            </section>
            <Footer/>
        </div>
    );
};

export default MentoringPage;