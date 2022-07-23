import React, { useContext } from 'react'
import { Breakpoint } from 'react-socks'

import './styles.css'
import StatsContext from '../../context/StatsContext'
import Game from './game/game'
import Upgrades from './upgrades/upgrades'
import Quests from './quests/quests'
import MobileMenu from './mobile-menu/MobileMenu'

const Home = ({stats, setStats}) => {
  // consume stats context and destructure the variables
  const userStats = useContext(StatsContext)
  const {health, strength, magic, experience, level} = userStats

  return (
    <section className='home-container'>
      {/* desktop */}
      <Breakpoint medium up>
        <div className='home-desktop'>
          <Quests />
          <Game setStats={setStats}/>
          <Upgrades />
        </div>
      </Breakpoint>

      {/* mobile */}
      <Breakpoint small down>
        <Game setStats={setStats}/>
        <MobileMenu />
      </Breakpoint>
    </section>
  )
}

export default Home