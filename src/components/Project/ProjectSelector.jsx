import React from 'react'
import './ProjectSelector.css'

export default function ProjectSelector(props) {
  return(
    <div className='ProjectSelector'>
      <div className='ProjectSelector-tab selected'><span>Good Writes</span></div>
      <div className='ProjectSelector-tab'><span>CKII Character Builder</span></div>
      <div className='ProjectSelector-tab'><span>Stocky</span></div>
    </div>
  )
}