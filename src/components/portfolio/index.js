import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import Project from '../project';

function Portfolio() {
    const projects = [
        {
            name: 'Single-Page Portfolio', description: 'The first version of my portfolio, which updates automatically with all of my github repositories.',
            url: 'https://erockenmeyer.github.io/Portfolio/', github: '/Portfolio', image: 'site screenshot.png', altInfo: 'screenshot of Single Page Portfolio'
        },
        {
            name: 'The Spell Book', description: 'A search utility for finding Dungeons and Dragons spells by level or school.',
            url: 'https://erockenmeyer.github.io/project-1-the-spell-book/', github: 'the-spell-book', image: 'the-spell-book.png', altInfo: 'screenshot of Spell Book website'
        },
        {
            name: 'Dungeons and Dragons Character Generator', description: 'A character sheet generator to create and store basic Dungeons and Dragons character information.',
            url: 'https://warm-castle-28524.herokuapp.com/', github: '/wizards-code', image: 'dnd-char-roll.png', altInfo: 'screenshot of character generator'
        },
        {
            name: 'Password Generator', description: 'A simple JavaScript-powered secure and randomized password generator.',
            url: 'https://erockenmeyer.github.io/friendly-parakeet/', github: '/friendly-parakeet', image: 'site screenshot fp.png', altInfo: 'Password generator screenshot'
        },
        {
            name: 'Weather App', description: 'An app to display the weather forecast for a given city.',
            url: 'https://erockenmeyer.github.io/weather-app/', github: '/weather-app', image: 'screenshot.png', altInfo: 'screenshot of weather app site'
        },
        {
            name: 'React Portfolio', description: 'You are here!',
            url: 'https://erockenmeyer.github.io/react-portfolio/', github: '/react-portfolio', image: 'react-portfolio-ss.PNG', altInfo: 'screenshot of this site\'s main page'
        }
    ]
    return (
        <main>
            <h1>Portfolio</h1>
            <div className='row justify-content-center mb-1'>
                {projects.map((project) => (<Project
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    github={project.github}
                    image={project.image}
                    altInfo={project.altInfo}
                 />))}
            </div>
        </main>
    )
}

export default Portfolio;