import React from 'react'
import Project from './Project'
import './Projects.css'
import ProjectSelector from './ProjectSelector'
import PROJECTS from '../../constants/Projects'

export default function Projects(props) {
  return(
    <div className='Projects'>
      <ProjectSelector PROJECTS={PROJECTS} />
      <Project />
    </div>
  )
}