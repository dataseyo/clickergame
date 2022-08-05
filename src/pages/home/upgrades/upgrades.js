import React from 'react'
import { Table, Cell,  } from '@mui/material'

import './styles.css'
import UpgradeRow from './upgrade-row/UpgradeRow'

const data = [
  { id: 1, cost: 10, text: "increase health"},
]

const Upgrades = ({mobile}) => {
  return (
    <div className='upgrades-container'>
        <ul>
          <li className='upgrades-title'>Upgrade 1</li>
          <li className='upgrades-title'>Upgrade 2</li>
          <li className='upgrades-title'>Upgrade 3</li>
          <li className='upgrades-title'>Upgrade 4</li>
          <li className='upgrades-title'>Upgrade 5</li>
          <li className='upgrades-title'>Upgrade 6</li>
          <li className='upgrades-title'>Upgrade 7</li>
          <li className='upgrades-title'>Upgrade 8</li>
        </ul>
    </div>
  )
}

export default Upgrades