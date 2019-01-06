import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'

const NotFound = () => (

    <div className="app__wrapper">
        <div className="body-background-left"></div>
        <div className="body-background-right"></div>
        <Logo />
        <div className='main-body row columns small-12 medium-11 medium-centered'>
            <div className="notfound">
                <div className="notfound__wrapper">
                    <h1>404</h1>
                    <p>Seems like page you are looking for does not exist.</p>
                    <Link to='/'>
                        <button
                            type="button"
                            className='rect-button'>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>


);

export default NotFound;