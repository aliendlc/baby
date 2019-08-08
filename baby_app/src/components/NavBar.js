import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Giraffe from '../favicon.png'

const NavBar = () => {
    return (
        <nav className="nav-wrapper deep-purple accent-1">
            <div className="container">
                <ul className="left">
                    <img id='giraffe' src={Giraffe} alt='not here'/>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <a className="brand-logo">Baby Time</a>
                <ul className="right">
                    <li><NavLink to="/BabyShower">Baby Shower</NavLink></li>
                    <li><NavLink to="/Photos">Photos</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
