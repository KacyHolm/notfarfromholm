import React, { useState } from 'react';
import './Josiah.css'
import kacy from './Josiah.JPG'
import '../../App.css';
import Travel from './subPages/Travel/Travel.js'
import Games from './subPages/Games/Games.js'
import Code from './subPages/Code/Code.js'

function Josiah() {
    let initialButtons = [
        { id: 1, label: 'Travel', datapage: 'tavel' },
        { id: 2, label: 'Games', datapage: 'games' },
        { id: 3, label: 'Code', datapage: 'code' },
    ];

    function ButtonGroup({ buttons }) {

        const [currentPage, setCurrentPage] = useState('home');
        const [activeButton, setActiveButton] = useState(1);


        const handleNavigation = (event) => {
            console.log(event.target.getAttribute('datapage'))
            setActiveButton(Number(event.target.getAttribute('id')))
            setCurrentPage(event.target.getAttribute('datapage'));
        };

        const renderPage = () => {
            switch (currentPage) {
                case 'tavel':
                    return <Travel />;
                case 'games':
                    return <Games />;
                case 'code':
                    return <Code />;
                default:
                    return <Travel />;
            }
        };


        return (
            <div style={{justifyItems:'center', width:'100%'}}>
                {buttons.map((button) => (
                    <button
                        className='navButtons'
                        id={button.id}
                        datapage={button.datapage}
                        onClick={handleNavigation}
                        style={{
                            textDecoration: activeButton === button.id ? 'underline' : 'none'
                        }}
                    >
                    {button.label}
                    </button>
                ))}
                {renderPage()}
            </div>
        );
    }


    return (
        <div>
            <div className='container'>
                <div>
                    <img src={kacy} alt="Josiah" className='introImage' />
                </div>
                <div className='introText'>
                    <h2>A little about me!</h2>
                    <p>
                        I’m someone who thrives at the intersection of creativity, technology, and exploration. My passion for <b>video games</b> runs deep, not just as a player, but as someone who appreciates the intricate world of game design and development. Whether it's getting lost in the storytelling or analyzing the mechanics, video games fuel my curiosity and drive for innovation. That’s where my love for <b>software engineering</b> comes in. I’m fascinated by the technical side of things—coding the systems, optimizing performance, and solving complex problems to make sure the experience is smooth and immersive.
                    </p>
                    <p>
                        Beyond the screen, I’m also an avid <b>traveler</b>. Exploring new places gives me fresh perspectives that often inspire my work, whether it’s experiencing new cultures, landscapes, or simply meeting interesting people. My adventures have helped me broaden my horizons, not just in my personal life, but also in how I approach challenges in both gaming and software development. For me, combining these passions—video games, software engineering, and travel—creates a fulfilling journey of both personal and professional growth.
                    </p>
                </div>
            </div>
            <div className='navigate'>
                <ButtonGroup buttons={initialButtons} />
            </div>
        </div>
    );

};



export default Josiah;