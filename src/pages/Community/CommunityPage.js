import React from 'react';
import Header from './../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CommunityBoard from '../../components/CommunityPage/CommunityBoard.js';
import '../../style/pages/Community/CommunityPage.css';

const CommunityPage = () => {
    return (
        <>
            <Header />
            <Navbar />
                <CommunityBoard/>
            <Footer/>
        </>
    );
};

export default CommunityPage;