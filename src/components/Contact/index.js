import React from 'react';
import '../../styles/content.css';


function Contact() {
    return (
        <div>
            <article id="contact">
                <h1 className="header">Contact</h1>
                <section className="content">
                    <ul>
                        <li>C: 281 386 7801</li>
                        <li><a href="mailto:Preston.Leon.Hill@gmail.com">Email</a></li>
                        <li><a href="https://www.linkedin.com/in/hillpreston/">LinkedIn</a></li>
                        <li><a href="https://github.com/chewy441014">Github</a></li>
                    </ul>
                </section>
            </article>
        </div>
    );
}

export default Contact