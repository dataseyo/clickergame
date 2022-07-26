import React, {useState} from 'react'

import './styles.css'

const Train = (props) => {
  return (
    <div className='train-container'>
      <div className='train-buttons-container'>
        <button className='train-button'>Workout</button>
        <button className='train-button'>Study</button>
        <button className='train-button'>Adventure</button>
        <button className='train-button'>Craft Spell</button>
      </div>

      <div className className='train-outcome-container'>
        <p className='train-text'>outcome</p>
      </div>
    </div>
  )
}

export default Train