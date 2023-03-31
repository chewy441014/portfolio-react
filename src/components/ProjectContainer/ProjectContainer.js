import React, { useState } from 'react';
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'



function ProjectContainer({ project }) {

  const [isExpanded, setIsExpanded] = useState(false)

  const expandDesc = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className='project'>
      <h3>{project.name}</h3>
      {isExpanded ? 
      <><p className='project__description'>{project.description}</p> 
      <button type="button" className='project__button' onClick={expandDesc}>Collapse</button></> : 
      <><p className='project__description'>{project.description.slice(0, 90)}...</p>
      <button type="button" className='project__button' onClick={expandDesc}>Expand</button></>}
      

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
}

export default ProjectContainer
