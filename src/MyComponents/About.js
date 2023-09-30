import React from 'react';
import Logo from './pomodoro.png'
import './ImageStyle.css';

const About = () => {
    return <div className='image-container'>
        <img src={Logo}  alt="About"/>
    </div>;
}

export default About;