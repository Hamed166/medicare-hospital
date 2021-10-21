import React from 'react';
import Blog from '../../Blog/Blog';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h>This is Home</h>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Blog></Blog>
        </div>
    );
};

export default Home;