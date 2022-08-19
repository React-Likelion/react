import React from 'react';
import Header from './../../components/Header';
import Navbar from '../../components/Navbar';
import { ConsultingList } from '../../data/ConsultingList';
import '../../style/components/Counsulting/CardNews.css'
import CardNews from '../../components/Consulting/CardNews';

const ConsultingPage = () => {
    return (
        <div>
            <Header />
            <Navbar val={"consulting"}/>
            <div className='cardSection'>
                {
                    ConsultingList.map((ele) => {
                        return <CardNews title={ele.title} text={ele.content} img={ele.img} link={ele.link}/>
                    })
                }
            </div>
        </div>
    );
};

export default ConsultingPage;