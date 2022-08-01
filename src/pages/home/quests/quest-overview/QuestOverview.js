import React from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'

import './styles.css'

import data from '../quests.json'
import city from '../../../../assets/city.png'

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
                <p>{item.name}</p>
              </div>
              
            )
          })
        }
    </div>
  )
}

export default QuestOverview