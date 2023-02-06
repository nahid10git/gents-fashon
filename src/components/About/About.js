import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
         <div className='logo'>
            <h1>Nahid.</h1>
            <p>www.facebook.com/nahid1234</p>
            <p>Cell: 09238137809</p>
         </div>
         <div className='service-container'>
           <h2>Education</h2>
           <p>HTML,CSS,JAVA,JAVA-SCRIPT,NODEJS, 
            PHYTHON,C++,C, RUBY, ETC...</p>
           <h2>Enterainment</h2>
           <p>MOVI, SERIES, TELE-FILM, WEB-SERICE, ETC...</p>
           <h2>Traveling</h2>
           <p>AIR-TICKET, BUS-TICKET, HOTEL-BOOKING, ETC...</p>
           <h2>Others</h2>
           <p>PASSPORT-PROCCESSING, VISA-PROCCESSING, LICENCE-PROCCESSING, ETC </p>
         </div>
        </div>
    );
};

export default About;