import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory
    } = props;
    return (
        <nav className='col-12 col-md-6'>
            <ul className='row'>
                {categories.map((category) => (
                    <li className='col-12 col-md-3'>
                        <a href={`#${category.name}`} onClick={() => 
                            setCurrentCategory(category)
                        }>{category.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;