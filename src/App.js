import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { BreakpointProvider } from 'react-socks';

import './App.css';
import Home from './pages/home/home'
import Stats from './pages/stats/stats'
import Navbar from './components/navbar/navbar';
import StatsContext from './context/StatsContext';
import ResourcesContext from './context/ResourcesContext';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [stats, setStats] = useLocalStorage('stats', {
    health: 100,
    strength: 10,
    magic: 10,
    experience: 0,
    level: 1
  })

  const [attack, setAttack] = useState(Math.floor((stats.strength/10 + stats.magic/10) * stats.level)
  )

  console.log(attack)

  const [resources, setResources] = useLocalStorage('resources', {
    stamina: 100,
    mana: 100
  })

  // bestiary modal state
  const [openBestiary, setOpenBestiary] = useState(false)

  // info modal state
  const [openInfo, setOpenInfo] = useState(false)

  // stats modal state
  const [openStats, setOpenStats] = useState(false)

  // settings modal state
  const [openSettings, setOpenSettings] = useState(false)

  return (
    <StatsContext.Provider value={stats}>
    <ResourcesContext.Provider value={resources}>
      <BreakpointProvider>
        <div className="App">
          <Navbar 
            openInfo={openInfo} setOpenInfo={setOpenInfo} 
            openStats={openStats} setOpenStats={setOpenStats}
            openSettings={openSettings} setOpenSettings={setOpenSettings}
            openBestiary={openBestiary} setOpenBestiary={setOpenBestiary}
          />
          <Routes>
            <Route 
              path="/clickergame" 
              element={
                <Home 
                  stats={stats} setStats={setStats} setResources={setResources}
                  openInfo={openInfo} setOpenInfo={setOpenInfo} 
                  openStats={openStats} setOpenStats={setOpenStats}
                  openSettings={openSettings} setOpenSettings={setOpenSettings}
                  openBestiary={openBestiary} setOpenBestiary={setOpenBestiary}
              />} 
            />
            <Route 
              path="/stats" 
              element={<Stats stats={stats} setStats={setStats}/>} 
            />
          </Routes>
        </div>
      </BreakpointProvider>
    </ResourcesContext.Provider>
    </StatsContext.Provider>
    
  );
}

export default App;
