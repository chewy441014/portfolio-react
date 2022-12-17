import React from 'react';
import { useParams } from 'react-router-dom';
import assets from '../assets/assets.json';
import '../styles/project.css';
import images from '../assets/images';

// import components
// import SearchCard from '../components/searchcard';

const Project = () => {
    // console.log(props.match.params);
    const { id } = useParams();
    // console.log(id)
    // console.log(assets)
    const projectData = assets.data.filter(project => project.id === id)[0];
    // console.log(projectData)
    return (
        <div>
            <h1>{projectData.title}</h1>
            <div className="d-flex">
                <div className="header">
                    <a href={projectData.link} target="_blank"><img className="image" src={images[projectData.image]} />
                        <p>Click to view deployed project</p></a>
                </div>
                <div className="content">
                    <p>{projectData.description}</p>
                    <p>{projectData.technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;