import React from 'react'
import Project from './Project'
import './Projects.css'
import ProjectSelector from './ProjectSelector'

export default function Projects(props) {
  return(
    <div className='Projects'>
      <ProjectSelector />
      <Project />
    </div>
  )
}