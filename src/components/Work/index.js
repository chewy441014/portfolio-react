import React, { useState } from 'react';
import '../../styles/content.css';
import '../../styles/cards.css';

function Work() {
    
    const [isHidden, setIsHidden] = useState([true, true, true, true, true, true]);

    const handleMouseEnter = (event) => {
        let index = Number(event.target.classList[0].slice(-1)) - 1;
        let defArray = [true, true, true, true, true, true];
        defArray[index] = false;
        setIsHidden(defArray)
    }

    const handleMouseExit = () => {
        let defArray = [true, true, true, true, true, true];
        setIsHidden(defArray)
    }

    return (
        <div>
            <article id="work">
                <h1 className="header">Work</h1>
                <section className="content">
                    <div className="cards">
                        <a href="/portfolio-react/project/01" id="card1"><figure className="card1 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Park Picker</p>
                            <div className={isHidden[0] ? "hide-details" : "show-details"}>Click for Details!</div>
                        </figure></a>
                        <a href="/portfolio-react/project/02"><figure className="card2 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Note Taker</p>
                            <div className={isHidden[1] ? "hide-details" : "show-details"}>Click for Details!</div>
                        </figure></a>
                        <a href="/portfolio-react/project/03"><figure className="card3 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Code Quiz</p>
                            <div className={isHidden[2] ? "hide-details" : "show-details"}>Click for Details!</div>
                        </figure></a>
                        <a href="/portfolio-react/project/04"><figure className="card4 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Tech Blog</p>
                            <div className={isHidden[3] ? "hide-details" : "show-details"}>Click for Details!</div>
                        </figure></a>
                        <a href="/portfolio-react/project/05"><figure className="card5 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Travel Weather Check</p>
                            <div className={isHidden[4] ? "hide-details" : "show-details"}>Click for Details!</div>
                        </figure></a>
                        <a href="/portfolio-react/project/06"><figure className="card6 card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <p>Social Media Backend</p>
                            <div className={isHidden[5] ? "hide-details" : "show-details"} >Click for Details!</div>
                        </figure></a>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Work