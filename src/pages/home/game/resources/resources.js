import React, { useEffect, useState, useContext } from 'react'

import './styles.css'
import ResourcesContext from '../../../../context/ResourcesContext'

// stamina controls how much one can train strength
// knowledge controls how much one can level magic
const Resources = ({setResources}) => {
  const {stamina, mana} = useContext(ResourcesContext)

  useEffect(() => {
    document.documentElement.style.setProperty('--stamina', `${stamina}%`)
    document.documentElement.style.setProperty('--mana', `${mana}%`)

  }, [stamina, mana])
  
  // replenish resources if they're lower than 100, every few seconds
  useEffect(() => {
    const staminaInterval = setInterval(() => {
      if (stamina < 100) {
        setResources(prevResources => ({
          ...prevResources,
          stamina: stamina + 1
        }))
      }
    }, 1000)

    return () => clearInterval(staminaInterval)
  }, [stamina])

  useEffect(() => {
    const manaInterval = setInterval(() => {
      if (mana < 100) {
        setResources(prevResources => ({
          ...prevResources,
          mana: mana + 1
        }))
      }
    }, 1000)

    return () => clearInterval(manaInterval)
  }, [mana])

  // // if (stamina < 100) {
  //   setInterval(() => {
  //     setResources(prevResources => ({
  //       ...prevResources,
  //       stamina: stamina + 1
  //     }))
  //   }, 3000)
  // }

  // while (mana < 100) {
  //   setInterval(() => {
  //     setResources(prevResources => ({
  //       ...prevResources,
  //       mana: mana + 1
  //     }))
  //   }, 3000)
  // }
  

  return (
    <div className='resources-container'>
      <div className='resources-flex-start'>
        {/* fill resource bar based on stamina value */}
        <div className='stamina'>
            <p className='resources-text'>{stamina}/100</p>
        </div>

        <div className='mana'>
            <p className='resources-text'>{mana}/100</p>
        </div>
      </div>
    </div>
  )
}

export default Resources