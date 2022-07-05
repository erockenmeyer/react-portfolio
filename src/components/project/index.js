import React from 'react';

function Project(props) {
    const {
        url,
        image,
        altInfo,
        name,
        description,
        github
    } = props
    return (

        <div className='col-12 col-md-6'>
            <a href={`${url}`} target='_blank' rel="noreferrer">
                <img className='mw-100' src={require(`../../assets/images/${image}`)} alt={altInfo} />
                <h3 className='site-name'>{name}</h3>
            </a>
            <p>{description}</p>
            <a href={`https://github.com/erockenmeyer/${github}`} target='_blank' rel="noreferrer">Github</a>
        </div>

    )
}

export default Project;