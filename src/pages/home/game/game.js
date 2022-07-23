import React, { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import './styles.css'
import hero from '../../../assets/hero.png'
import attack from '../../../assets/attack.png'

const Game = () => {
    const [clicked, setClicked] = useState(false)

    const clickAnimation = () => {
        console.log("attack")
        setClicked(true)
        setTimeout(() => setClicked(false), 350)
    }


  return (
    <div className='game-container'>
        <p>Game</p>
        <SpriteAnimator
            width={200}
            height={200}
            sprite={clicked ? attack : hero}
            shouldAnimate={true}
            fps={10}
            startFrame={0}
            scale={.5}
            //stopLastFrame={true}
            //reset={!animate}
        />
        <button onClick={() => clickAnimation()}>Attack</button>
    </div>
  )
}

export default Game