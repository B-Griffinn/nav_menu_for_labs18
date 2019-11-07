import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div>
            <div className='burger'>
                <div className='lines'>
                    <div className='line'>

                    </div>
                    <div className='line'>

                    </div>
                    <div className='line'>

                    </div>
                </div>
            </div>
            <div className='menu-container'>
                <div 
                className='menu-logo'
                >
                <img className='menu-logo-img'
                src='' 
                alt="Our Menu Logo"/>
                </div>
                <div className='menu-title'></div>
                <a 
                    href='https://twitter.com/1517fund'
                    className='menu-twitter'
                    target='_blank'
                >
                    Follow us on Twitter
                </a>
                <a
                    href='https://www.1517fund.com/'
                    className='menu-homePage'
                    target='_blank'
                >
                    1517 Home                
                </a>
            </div>
        </div>
    );    
}

export default Menu;

