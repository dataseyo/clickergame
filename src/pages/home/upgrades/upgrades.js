import React from 'react'

import './styles.css'

const Upgrades = ({mobile}) => {
  return (
    <div className='upgrades-container'>
        <h2 className='upgrades-title'>Upgrades</h2>
        <ul>
          <li className='upgrades-title'>Upgrade 1</li>
          <li className='upgrades-title'>Upgrade 2</li>
          <li className='upgrades-title'>Upgrade 3</li>
          <li className='upgrades-title'>Upgrade 4</li>
        </ul>
    </div>
  )
}

export default Upgrades