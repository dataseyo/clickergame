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
import StatsModal from '../../components/nav-modals/StatsModal'
import InfoModal from '../../components/nav-modals/InfoModal'
import SettingsModal from '../../components/nav-modals/SettingsModal'

const Home = ({setStats, setResources, openInfo, setOpenInfo, openStats, setOpenStats, openSettings, setOpenSettings}) => {
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
          
          <Game setStats={setStats} setResources={setResources}/>
          <div className='home-sub-container'>
            <CollapsableDiv title={"Train"} children={<Train setResources={setResources} setStats={setStats}/>}/>
            <CollapsableDiv title={"Quests"} children={<Quests/>}/>
            <CollapsableDiv title={"Upgrades"} children={<Upgrades/>} />
          </div>
        </div>
      </Breakpoint>

      {/* mobile */}
      <Breakpoint small down>
        <Game setStats={setStats} setResources={setResources}/>
        <CollapsableDiv title={"Train"} children={<Train setResources={setResources} setStats={setStats}/>}/>
        <CollapsableDiv title={"Quests"} children={<Quests/>}/>
        <CollapsableDiv title={"Upgrades"} children={<Upgrades/>} />
        <InfoModal openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <StatsModal openStats={openStats} setOpenStats={setOpenStats}/>
      <SettingsModal openSettings={openSettings} setOpenSettings={setOpenSettings}/>
      </Breakpoint>

   
    </section>
  )
}

export default Home