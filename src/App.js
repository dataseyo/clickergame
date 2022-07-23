import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import './App.css';
import Home from './pages/home/home'
import Stats from './pages/stats/stats'
import Navbar from './components/navbar/navbar';
import StatsContext from './context/StatsContext';

function App() {
  const [stats, setStats] = useState({
    health: 100,
    strength: 10,
    magic: 10,
    experience: 0,
    level: 1
  })

  return (
    <StatsContext.Provider value={stats}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home stats={stats} setStats={setStats}/>} />
          <Route path="/stats" element={<Stats stats={stats} setStats={setStats}/>} />
        </Routes>
      </div>
    </StatsContext.Provider>
    
  );
}

export default App;
