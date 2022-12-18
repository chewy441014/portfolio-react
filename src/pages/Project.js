import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import assets from '../assets/assets.json';
import '../styles/project.css';
import images from '../assets/images';

// import components
// import SearchCard from '../components/searchcard';

const Project = () => {

    const { id } = useParams();
    const projectData = assets.data.filter(project => project.id === id)[0];
    const [isHiddenPop, setIsHiddenPop] = useState(true);

    const handleMouseEnter = () => {
        setIsHiddenPop(false)
    }

    const handleMouseExit = () => {
        setIsHiddenPop(true)
    }

    return (
        <div>
            <div className="contain">
                <h1>{projectData.title}</h1>
                <div className="contain-center">
                    <div className="projectimg">
                        <a href={projectData.link} target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
                            <img className="image" src={images[projectData.image]} />
                            <div className={isHiddenPop ? "hide-details2" : "show-details2"}>Click for Details!</div>
                        </a>
                    </div>
                    <div className="projectdesc">
                        <p>{projectData.description}</p>
                        <p className="technologyp">Technologies Used:</p>
                        <ul className="technology">
                            {projectData.technologies.map((elem) =>
                                <li key={elem}>{elem}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <figure className="backgimg"></figure>
        </div>
    )
}

export default Project;