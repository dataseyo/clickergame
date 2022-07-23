import React, { useContext } from 'react'

import StatsContext from '../../context/StatsContext'

const Stats = ({stats, setStats}) => {
    const userStats = useContext(StatsContext)
    const {health, strength, magic, experience, level} = userStats

    console.log(stats)

    const gainXp = () => {
        setStats(prevStats => ({
          ...prevStats,
          experience: experience + 1
        }))
    }

  return (
    <div>
        <h2>Stats</h2>
        <button onClick={gainXp}>Gain XP</button>
        <p>{experience}</p>
    </div>
  )
}

export default Stats