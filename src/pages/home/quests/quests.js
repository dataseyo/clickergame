import React from 'react'

import './styles.css'
import QuestButtons from './quest-buttons/QuestButtons'

const Quests = () => {
  return (
    <div className='quests-container'>
        <ul>
          <li className='quests-title'>Quest 1</li>
          <li className='quests-title'>Quest 2</li>
          <li className='quests-title'>Quest 3</li>
          <li className='quests-title'>Quest 4</li>
        </ul>
    </div>
  )
}

export default Quests