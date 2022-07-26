import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHeart, faHatWizard } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
import StatsContext from '../../../../context/StatsContext'

const StatScreen = () => {
    const userStats = useContext(StatsContext)

  return (
    <div className='stat-screen-container'>
        <div className='stat-screen-stat'>
            <FontAwesomeIcon icon={faHeart} className='stat-screen-icon'/>
            <p className='stat-screen-text'>{userStats.health}</p>
        </div>

        <div className='stat-screen-stat'>
            <FontAwesomeIcon icon={faDumbbell} className='stat-screen-icon'/>
            <p className='stat-screen-text'>{userStats.strength}</p>
        </div>

        <div className='stat-screen-stat'>
            <FontAwesomeIcon icon={faHatWizard} className='stat-screen-icon'/>
            <p className='stat-screen-text'>{userStats.magic}</p>
        </div>

        <div className='stat-screen-stat'>
            <p className='stat-screen-text'>XP:</p>
            <p className='stat-screen-text'>{userStats.experience}</p>
        </div>

        <div className='stat-screen-stat'>
            <p className='stat-screen-text'>LVL:</p>
            <p className='stat-screen-text'>{userStats.level}</p>
        </div>

        
    </div>
  )
}

export default StatScreen