import React from 'react';

// import components
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

const Home = () => {
    return (
        <div>
            <About />
            <Work />
            <Contact />
            <Resume />
        </div>
    )
}

export default Home;