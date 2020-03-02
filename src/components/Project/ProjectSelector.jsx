import React, { useState } from 'react'
import './ProjectSelector.css'

export default function ProjectSelector(props) {
  const [selected, setSelected] = useState('0')

  return(
    <div className='ProjectSelector'>
      <ProjectTab id='0' selected={selected} setSelected={setSelected}>Good Writes</ProjectTab>
      <ProjectTab id='1' selected={selected} setSelected={setSelected}>CKII Character Builder</ProjectTab>
      <ProjectTab id='2' selected={selected} setSelected={setSelected}>Stocky</ProjectTab>
    </div>
  )
}

function ProjectTab({id, children, selected, setSelected}) {
  const isSelected = () => {
    return selected === id ? true : false
  }
  const handleClick = () => setSelected(id)

  return(
    <div key={id} className={`ProjectSelector-tab ${isSelected() ? 'selected' : null}`} onClick={handleClick}>
      <span>{children}</span>
    </div>
  )
}