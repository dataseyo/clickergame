import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faCircleInfo, faGear, faPaw } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Navbar = ({openBestiary, setOpenBestiary, openInfo, setOpenInfo, openStats, setOpenStats, openSettings, setOpenSettings}) => {

  return (
    <header className='navbar-container'>
        <h2 className='navbar-title'>Idle Game</h2>

        <div className='nav-menu'>
            <div className='navbar-item' onClick={() => setOpenBestiary(true)}>
                <p className={`navbar-text ${openBestiary ? 'navbar-text-open' : null}`}>Bestiary</p>
                <FontAwesomeIcon 
                  icon={faPaw} 
                  className={`navbar-icon ${openBestiary ? 'navbar-icon-open': null}`}
                />
            </div>

            {/* <div className='navbar-item' onClick={() => setOpenStats(true)}>
                <p className={`navbar-text ${openStats ? 'navbar-text-open' : null}`}>Stats</p>
                <FontAwesomeIcon 
                  icon={faChartColumn} 
                  className={`navbar-icon ${openStats ? 'navbar-icon-open': null}`}
                />
            </div> */}

            <div className='navbar-item' onClick={() => setOpenInfo(true)}>
                <p className={`navbar-text ${openInfo ? 'navbar-text-open' : null}`}>Info</p>
                <FontAwesomeIcon 
                  icon={faCircleInfo} 
                  className={`navbar-icon ${openInfo ? 'navbar-icon-open': null}`}
                />
            </div>

            <div className='navbar-item' onClick={() => setOpenSettings(true)}>
                <p className={`navbar-text ${openSettings ? 'navbar-text-open' : null}`}>Settings</p>
                <FontAwesomeIcon 
                  icon={faGear} 
                  className={`navbar-icon ${openSettings ? 'navbar-icon-open': null}`}
                />
            </div>
        </div>
    </header>
  )
}

export default Navbar