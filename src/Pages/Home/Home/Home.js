import React from 'react';
import BetterbuildSection from '../../BetterbuildSection/BetterbuildSection';
import EarnSection from '../../EarnSection1/EarnSection';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';

import Services from '../StockServices/StockServices';
import './Home.css'

const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <BetterbuildSection></BetterbuildSection>
            <h1 className='text-center mt-5 res-text mb-2'>How to earn Money on this website</h1>
            <EarnSection></EarnSection>
           
        </>
    );
};

export default Home;