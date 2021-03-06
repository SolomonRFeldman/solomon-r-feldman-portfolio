import React, { useState } from 'react'
import Project from './Project'
import './Projects.css'
import ProjectSelector from './ProjectSelector'
import PROJECTS from '../../constants/Projects'

export default function Projects(props) {
  const [selected, setSelected] = useState(1)
  const selectedProject = () => PROJECTS.find(project => project.id === selected)

  return(
    <div className='Projects'>
      <ProjectSelector selected={selected} setSelected={setSelected} PROJECTS={PROJECTS} />
      <Project project={selectedProject()} />
    </div>
  )
}