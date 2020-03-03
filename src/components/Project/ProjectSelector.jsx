import React from 'react'
import './ProjectSelector.css'

export default function ProjectSelector({PROJECTS, selected, setSelected}) {

  return(
    <div className='ProjectSelector'>
      {PROJECTS.map(project => {
        return (
          <ProjectTab 
            id={project.id} 
            key={project.id} 
            selected={selected} 
            setSelected={setSelected}
          >
            {project.name}
          </ProjectTab>
        )
      })}
    </div>
  )
}

function ProjectTab({id, children, selected, setSelected}) {
  const isSelected = () => {
    return selected === id ? true : false
  }
  const handleClick = event => {
    event.preventDefault()
    return setSelected(id)
  }

  return(
    <a href='#' key={id} className={`ProjectSelector-tab ${isSelected() ? 'selected' : null}`} onClick={handleClick}>
      <span>{children}</span>
    </a>
  )
}