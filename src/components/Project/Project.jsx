import React from 'react'
import './Project.css'

export default function Project({project}) {
  return(
    <div className='Project'>
      <div className='Project-background'>
        <img height='600px' src={project.background}></img>
      </div>
      <div className='Project-body'>
        <div style={{display: 'inline-block'}} className='Project-description'>
          <h1 className='Project-name'>{project.name}</h1>
          <p className='Project-text'>
            {project.description}
            <ul className='Project-bullet-list'>{project.bullets.map(bullet => <li className='Project-bullet'>{bullet}</li>)}</ul>
          </p>
        </div>
        <div className='Project-contact'>
          <a className='Project-link' href={project.website} target="_blank" rel="noopener noreferrer">
            <span className='Project-link-text'>Project Website</span>
          </a>
          <a className='Project-link' href={project.repo} target="_blank" rel="noopener noreferrer">
            <img alt='GitHub Mark' height="24" src='../GitHub-Mark-Light-32px.png' />
            <span className='Project-github-link-text'>Project Repo</span>
          </a>
        </div>
      </div>
    </div>
  )
}