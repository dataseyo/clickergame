import React, { useContext } from 'react'

import './styles.css'
import StatsContext from '../../context/StatsContext'
import Game from './game/game'

const Home = ({stats, setStats}) => {
  // consume stats context and destructure the variables
  const userStats = useContext(StatsContext)
  const {health, strength, magic, experience, level} = userStats

  return (
    <section className='home-container'>
      <Game />
    </section>
  )
}

export default Home