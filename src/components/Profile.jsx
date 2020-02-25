import React from 'react'
import './Profile.css'

export default function Profile(props) {
  return(
    <div className='Profile'>
      <img alt='beep' height="300" width="300" src='../profile_picture.png' />
      <h1 className='Profile-name'>Solomon Raphael Feldman</h1>
    </div>
  )
}