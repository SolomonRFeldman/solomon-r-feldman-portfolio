import React from 'react'
import './Profile.css'

export default function Profile(props) {
  return(
    <div className='Profile'>
      <img className='Profile-picture' alt='beep' width="300" src='../profile_picture.png' />
      <div className='Profile-name-container'><h1 className='Profile-name'>Solomon Raphael Feldman</h1></div>
    </div>
  )
}