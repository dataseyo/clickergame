import React from 'react'
import { useNavigate } from 'react-router'

import './styles.css'

const QuestInstance = (props) => {
    const navigate = useNavigate()

  return (
    <div className='quest-instance-container'>
        <h3 className='quest-instance-text'>{props.name}</h3>
        <button onClick={() => navigate('/clickergame')}>Back To Quests</button>
    </div>
  )
}

export default QuestInstance