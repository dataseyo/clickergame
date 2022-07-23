import React, { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import './styles.css'
import StatScreen from './stat-screen/StatScreen'
import Upgrades from '../upgrades/upgrades'
import hero from '../../../assets/hero.png'
import attack from '../../../assets/attack.png'

const Game = ({setStats}) => {
    const [clicked, setClicked] = useState(false)

    const clickAnimation = () => {
        console.log("attack")
        setClicked(true)
        setTimeout(() => setClicked(false), 300)
    }

  return (
    <div className='game-container'>
        <div className='game-clickable-area' onClick={() => clickAnimation()}>
            <SpriteAnimator
                width={200}
                height={190}
                sprite={clicked ? attack : hero}
                shouldAnimate={true}
                fps={10}
                startFrame={0}
                scale={.5}
                //stopLastFrame={true}
                //reset={!animate}
                className='sprite'
            />
        </div>
        <StatScreen/>
    </div>
  )
}

export default Game