import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, AppBar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const MobileMenu = ({value, onChange}) => {
  return (
    <footer className='mobile-menu-container'>
        <BottomNavigation
            showLabels
            value={value}
            onChange={onChange}
            sx={{
                position: 'fixed', 
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                zIndex: 1,
                }}
        >
            <BottomNavigationAction 
                label="quests" 
                icon={<FontAwesomeIcon icon={faBookOpen}/>}
                sx={{color: 'white'}}
            />

            <BottomNavigationAction 
                label="upgrades" 
                icon={<FontAwesomeIcon icon={faBookOpen}/>}
                sx={{color: 'white'}}
            />
        </BottomNavigation>
    </footer>
  )
}

export default MobileMenu