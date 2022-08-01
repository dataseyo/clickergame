import React from 'react'
import { useNavigate } from 'react-router'

import './styles.css'

const QuestInstance = (props) => {
    const navigate = useNavigate()

  return (
    <div className='quest-instance-container'>
        <p className='quest-instance-text'>QuestInstance {props.name}</p>
        <button onClick={() => navigate('/clickergame')}>Back To Quests</button>
    </div>
  )
}

export default QuestInstance