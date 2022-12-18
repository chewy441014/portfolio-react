import React from 'react';
import '../../styles/content.css';
import resumePDF from '../../assets/HillPrestonResume.pdf';

function Resume() {
    return (
        <div>
            <article id="resume">
                <h1 className="header">Resume</h1>
                <section className="content">
                    <ul>
                        <li><a href={resumePDF} target="_blank">Resume</a></li>
                    </ul>
                </section>
            </article>
            <figure className="backgimg"></figure>
        </div>
    );
}

export default Resume;