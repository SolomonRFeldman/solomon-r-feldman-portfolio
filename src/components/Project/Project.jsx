import React from 'react'
import './Project.css'

export default function Project({project}) {
  return(
    <div className='Project'>
      <div className='Project-background'>
        <img height='600px' src={project.background}></img>
      </div>
      <div className='Project-body'>
        <h1 className='Project-name'>{project.name}</h1>
        <p className='Project-text'>
          {project.description}
          <ul className='Project-bullet-list'>{project.bullets.map(bullet => <li className='Project-bullet'>{bullet}</li>)}</ul>
        </p>
      </div>
    </div>
  )
}