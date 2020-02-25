import React from 'react'
import './Profile.css'

export default function Profile(props) {
  return(
    <div className='Profile'>
      <img className='Profile-picture' alt='Profile' width="300" src='../profile_picture.png' />
      <div className='Profile-name-container'>
        <h1 className='Profile-name'>Solomon Raphael Feldman</h1>
      </div>
      <div className='Profile-bio-container'>
        <h2 className='Profile-title'>Full Stack Engineer</h2>
        <hr className='Profile-horizontal-rule'/>
        <p className='Profile-bio'>
          Full Stack Web Developer with a passion for developer friendly code and user friendly websites. 
          With a background in studying Physics and Computer Science, and an interest in Music, 
          he began his journey into the world of web development through desiring a more practical application for his education. 
          <br/><br/>
          Throughout his web development experience he's learned to value writing readable, maintainable, and testable code, 
          not only for the sake of others, but for his own ability to maintain and add on to his own code.
        </p>
        <hr className='Profile-horizontal-rule'/>
        <div className='Profile-contact'>
          <p>
            929-310-4620<br/>
            SolomonRFeldman@gmail.com
          </p>
          <a className='Profile-github' href='https://github.com/SolomonRFeldman' target="_blank" rel="noopener noreferrer" >
            <img alt='GitHub Mark' height="24" src='../GitHub-Mark-Light-32px.png' />
            <span className='Profile-github-text'>Solomon's GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}