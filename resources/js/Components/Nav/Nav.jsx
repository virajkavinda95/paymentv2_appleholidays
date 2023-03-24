import React from 'react';
import './Nav.css';

function Nav(props) {
    return (
        <div className='nav__Div'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">PAYMENT PORTAL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='custom__NavBox'>
                    <ul className='navbar-nav'>
                        <li className="nav-item dropdown">
                            <a className="nav-link mr-4">
                                <i className="bi bi-person-fill"></i> {props.authuser}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav