import React from 'react';

function Navigation(props) {
    const {
        categories = [],
        setCurrentCategory
    } = props;
    return (
        <nav>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li>
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