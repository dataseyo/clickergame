import React from 'react'
import hero from '../../assets/hero.png'

import './styles.css'

const Sprite = () => {
  return (
    <div className='sprite'>
        <img src={hero} alt="main character" className='spritesheet'></img>
    </div>
  )
}

export default Sprite