import React, { useState } from 'react';
import { Link } from '@reach/router';

const ResponsiveNavigation = ({ navLinks, background, hoverBackground, linkColor, logo }) => {

    const [ hoverIndex, setHoverIndex ] = useState(-1); // used for hover color
    const [ navOpen, setNavOpen ] = useState(false); // used for taggling drawer slider

    return (
        <nav 
            className='responsive-toolbar'
            style={ { background } }  
        >   
        <ul
            style={ { background } }
            className={ navOpen ? 'active' : '' }
        >
            <figure
                onClick={ () => setNavOpen(!navOpen) }
            >
                <img src={ logo }  height='40px' width='40px' alt="our logo"/>
            </figure>
            { navLinks.map((link, index) => 
                <li
                    onClick={ () => setNavOpen(!navOpen) }
                    onMouseEnter={ () => setHoverIndex(index) }
                    onMouseLeave={ () => setHoverIndex(-1) }
                    style={{ background: hoverIndex === index ? ( hoverBackground || '#999' ) : '' }}
                    className={ navOpen ? 'active' : '' }
                >
                    <Link
                        to={ link.path }
                        style={{ color: linkColor }}
                    >
                        { link.text }
                        <i className={ link.icon } />
                    </Link>
                </li>
            ) }
        </ul>
        </nav>
    )
}

export default ResponsiveNavigation;
