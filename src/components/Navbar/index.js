import React from 'react';
import '../../styles/navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <h1>Preston Hill</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            <figure className="backgimg"></figure>
        </div>
    );
}

export default Navbar;
