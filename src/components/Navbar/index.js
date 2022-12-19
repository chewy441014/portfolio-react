import React from 'react';
import '../../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const home = () => {
        navigate('/');
    }
    return (
        <div>
            <nav>
                <h1 onClick={home}>Preston Hill</h1>
                {/* <ul>
                    <li><a href="/#/portfolio-react/#about">About</a></li>
                    <li><a href="/#/portfolio-react/#work">Work</a></li>
                    <li><a href="/#/portfolio-react/#contact">Contact</a></li>
                    <li><a href="/#/portfolio-react/#resume">Resume</a></li>
                </ul> */}
            </nav>
            <figure className="backgimg"></figure>
        </div>
    );
}

export default Navbar;
