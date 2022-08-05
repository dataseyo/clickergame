import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import QuestGrid from './quest-grid/QuestGrid'

const QuestInstance = (props) => {
    const navigate = useNavigate()

  return (
    <div className='quest-instance-container'>
        <div className='quest-instance-header'>
            <h3 className='quest-instance-text'>{props.name}</h3>
            <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={() => navigate('/clickergame')}
                className='quest-instance-icon'
                size='lg'
            />       
        </div>
       
        <QuestGrid />
            <p className='quest-button-text'>Back To Quests</p>
        
    </div>
  )
}

export default QuestInstance