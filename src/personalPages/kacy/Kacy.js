import React from 'react';
import '../../App.css';
import './Kacy.css'
import kacy from './Kacy.jpg'

const Kacy = () => {
    return (
        <div className='Column, Kacy-Theme'>
            <div className='Row, Kacy-Intro'>
                <img src={kacy} alt="Kacy" className='Kacy-Img' />
                <div className='Column, Kacy-Intro-Text'>
                    <h2>Hello! I'm Kacy</h2>
                    <p>I’m a software engineer, and I’m the one who created the very webpage you’re on right now. When I'm not coding, you’ll find me in the kitchen, experimenting with new recipes. I’m passionate about cooking, and I wanted to share my favorite recipes with you here. I hope you find some inspiration for your next meal!</p>
                    <p>Thanks for visiting!</p>
                </div>
            </div>
            <div style={{ 'padding-top': '4em' }} />
            <div className='Kacy-Intrests'>
                <h1>Recepies</h1>
            </div>
        </div>
    );
};

export default Kacy;