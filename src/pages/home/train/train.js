import React, {useState} from 'react'

import './styles.css'
import trainData from "./train-options.json"

const Train = (props) => {
  return (
    <div className='train-container'>
      <div className='train-buttons-container'>
        <button className='train-button'>Workout</button>
        <button className='train-button'>Study</button>
        <button className='train-button'>Adventure</button>
        <button className='train-button'>???</button>
      </div>

      <div className className='train-outcome-container'>
        <p className='train-text'>{JSON.stringify(trainData.workout.outcomes[0].text)}</p>
      </div>
    </div>
  )
}

export default Train