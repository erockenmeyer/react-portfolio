import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

function Portfolio() {
    return (
        <main>
            <h1>Portfolio</h1>
            <div className='row justify-content-center mb-1'>
                <div className='col-12 col-md-6'>
                    <a href="https://erockenmeyer.github.io/Portfolio/" target='_blank' rel="noreferrer">
                        <img className='mw-100' src={require('../../assets/images/site screenshot.png')} alt="screenshot of Single Page Portfolio" />
                        <h3 className='site-name'>Single-Page Portfolio</h3>
                    </a>
                    <p>The first version of my portfolio, which updates automatically with all of my github repositories.</p>
                </div>
                <div className='col-12 col-md-6'>
                    <a href="https://erockenmeyer.github.io/project-1-the-spell-book/" target="_blank" rel="noreferrer">
                        <img className='mw-100' src={require('../../assets/images/the-spell-book.png')} alt="screenshot of Spell Book website" />
                        <h3 className='site-name'>The Spell Book</h3>
                    </a>
                    <p>A search utility for finding Dungeons and Dragons spells by level or school.</p>
                </div>
                <div className='col-12 col-md-6'>
                    <a href="https://warm-castle-28524.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img className='mw-100' src={require('../../assets/images/dnd-char-roll.png')} alt="screenshot of character generator" />
                        <h3 className='site-name'>Dungeons and Dragons Character Generator</h3>
                    </a>
                    <p>A character sheet generator to create and store basic Dungeons and Dragons character information.</p>
                </div>
                {/* final project, add later
                 <div className='col-12 col-md-6'>
                    <img className='mw-100' />
                    <h3 className='site-name'>On a Role Tavern</h3>
                    <p>A resource for publishing campaign ideas and gathering inspiration for your own campaigns.</p>
                </div> */}
            </div>
        </main>
    )
}

export default Portfolio;