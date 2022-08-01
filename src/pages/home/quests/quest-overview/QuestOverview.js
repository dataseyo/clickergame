import React from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import data from '../quests.json'

const QuestOverview = () => {
    const navigate = useNavigate()

  return (
    <div className='quests-container'>
        {
          data.zones.map((item, index) => {
            return (
              <div 
                key={index}
                className='quest'
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.location})`}}
                onClick={() => navigate(`${item.nav}`)}
              >
                <h3>{item.name}</h3>
              </div>
              
            )
          })
        }
    </div>
  )
}

export default QuestOverview