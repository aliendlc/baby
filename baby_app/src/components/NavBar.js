import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Giraffe from '../favicon.png'

const NavBar = () => {
    return (
        <nav className="nav-wrapper deep-purple accent-1"
        id="navWrap">
            <div
            id="nav"
            class="nav-collapse collapse">
                <ul
                id="leftSide"
                className="left"
                margin-left="2em">
                    <img id='giraffe' src={Giraffe} alt='not here'/>
                </ul>
                <a
                id="title"
                className="brand">Baby Time</a>
                <ul
                 id="rightSide"
                 className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/BabyShower">Baby Shower</NavLink></li>
                    <li><NavLink to="/Photos">Photos</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
