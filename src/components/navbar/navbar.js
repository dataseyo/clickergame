import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Navbar = ({openInfo, setOpenInfo, openStats, setOpenStats, openSettings, setOpenSettings}) => {

  return (
    <header className='navbar-container'>
        <h2 className='navbar-title'>Idle Game</h2>

        <div className='nav-menu'>
            <div className='navbar-item' onClick={() => setOpenStats(true)}>
                <p className='navbar-text'>Stats</p>
                <FontAwesomeIcon icon={faChartColumn} className='navbar-icon'/>
            </div>

            <div className='navbar-item' onClick={() => setOpenInfo(true)}>
                <p className='navbar-text'>Info</p>
                <FontAwesomeIcon icon={faCircleInfo} className='navbar-icon'/>
            </div>

            <div className='navbar-item' onClick={() => setOpenSettings(true)}>
                <p className='navbar-text'>Settings</p>
                <FontAwesomeIcon icon={faGear} className='navbar-icon'/>
            </div>
        </div>
    </header>
  )
}

export default Navbar