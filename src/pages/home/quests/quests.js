import React from 'react'
import { BrowserRouter, useNavigate, Outlet } from 'react-router-dom'

import './styles.css'
import data from './quests.json'

console.log(data)

const Quests = () => {
  const navigate = useNavigate()

  return (
    <div className='quests-container'>
            <Outlet/>
    </div>
  )
}

export default Quests