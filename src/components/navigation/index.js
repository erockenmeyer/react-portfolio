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
                    <li onClick={() => {
                        setCurrentCategory(category);
                    }}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;