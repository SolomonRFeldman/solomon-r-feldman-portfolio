import React from 'react'
import './Project.css'

export default function Project({project}) {
  return(
    <div className='Project'>
      <h1>{project.name}</h1>
    </div>
  )
}