import React, { useContext, useState } from 'react'
import { Breakpoint } from 'react-socks'

import './styles.css'
import StatsContext from '../../context/StatsContext'
import Game from './game/game'
import Upgrades from './upgrades/upgrades'
import Quests from './quests/quests'
import Train from './train/train'
import MobileMenu from './mobile-menu/MobileMenu'
import CollapsableDiv from '../../components/collapsable-div/CollapsableDiv'

const Home = ({stats, setStats}) => {
  // consume stats context and destructure the variables
  const userStats = useContext(StatsContext)
  const {health, strength, magic, experience, level} = userStats

  // mobile menu state
  const [value, setValue] = useState(-1)
  const onChange = (event, newVal) => {
    if (newVal === value) {
      setValue(-1)
    } else {
      setValue(newVal)
    }
  }
  
  return (
    
    <section className='home-container'>
      {/* desktop */}
      <Breakpoint medium up className='breakpoint-medium'>
        <div className='home-desktop'>
          <Quests />
          <Game setStats={setStats}/>
          <Upgrades />
        </div>
      </Breakpoint>

      {/* mobile */}
      <Breakpoint small down>
        <Game setStats={setStats}/>
        <CollapsableDiv title={"Train"} children={<Train/>}/>
        <CollapsableDiv title={"Quests"} children={<Quests/>}/>
        <CollapsableDiv title={"Upgrades"} children={<Upgrades/>} />
        
        {/* {value === 0 ? <Quests mobile={true}/> : null}
        {value === 1 ? <Upgrades mobile={true}/> : null}
        <MobileMenu value={value} onChange={onChange}/> */}
      </Breakpoint>
    </section>
  )
}

export default Home