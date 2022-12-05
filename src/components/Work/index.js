import React from 'react';
import '../../styles/content.css';
import '../../styles/cards.css';

function Work() {
    return (
        <div>
        <article id="work">
            <h1 className="header">Work</h1>
            <section className="content">
                <div className="cards">
                    <a href="https://chewy441014.github.io/trail-picker/" target="blank" id="card1"><figure className="card1 card" ><p>Park Picker</p> </figure></a>
                    <a href="https://notes-tracker-preston.herokuapp.com/" target="blank"><figure className="card2 card"><p>Notes App</p> </figure></a>
                    <a href="https://chewy441014.github.io/Code-Quiz/" target="blank"><figure className="card3 card"><p>JavaScript Quiz</p> </figure></a>
                    <a href="https://tech-blog-preston.herokuapp.com/" target="blank"><figure className="card4 card"><p>Tech Blog</p> </figure></a>
                    <a href="https://chewy441014.github.io/Travel-Weather-Check/" target="blank"><figure className="card5 card"> <p>Weather Dashboard</p> </figure></a>
                </div>
            </section>
        </article>
        </div>
    );
}

export default Work