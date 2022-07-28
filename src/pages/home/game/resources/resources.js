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