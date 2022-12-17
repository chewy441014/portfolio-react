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
                    <a href="/project/01" target="blank" id="card1"><figure className="card1 card" ><p>Park Picker</p> </figure></a>
                    <a href="/project/02" target="blank"><figure className="card2 card"><p>Notes App</p> </figure></a>
                    <a href="/project/03" target="blank"><figure className="card3 card"><p>JavaScript Quiz</p> </figure></a>
                    <a href="/project/04" target="blank"><figure className="card4 card"><p>Tech Blog</p> </figure></a>
                    <a href="/project/05" target="blank"><figure className="card5 card"> <p>Weather Dashboard</p> </figure></a>
                </div>
            </section>
        </article>
        </div>
    );
}

export default Work