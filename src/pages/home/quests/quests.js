import React from 'react'
import { BrowserRouter, useNavigate, Outlet } from 'react-router-dom'

import './styles.css'
import QuestButtons from './quest-buttons/QuestButtons'

import data from './quests.json'
import city from '../../../assets/city.png'

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