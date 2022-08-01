import React, { useState } from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import './styles.css'
import StatScreen from './stat-screen/StatScreen'
import Parallax from './parallax/parallax'
import hero from '../../../assets/hero.png'
import attack from '../../../assets/attack.png'
import Resources from './resources/resources'
import PlusGenerator from './plus-generator/PlusGenerator'

import Tiles from '../../../components/tiles/tiles'

const Game = ({setStats, setResources}) => {
    // sprite state
    const [sprite, setSprite] = useState(hero)

    // resource state
    const [knowledge, setKnowledge] = useState(100)
    const [stamina, setStamina] = useState(100)

    // attack and animation state
    const [clicked, setClicked] = useState(false)

    const [plusses, setPlusses] = useState([])

    const clickAnimation = () => {
        const now = Date.now()
        const newPlus = generatePlus()
        
        const filteredPlusses = plusses.filter(plus => {
            const delta = now - newPlus.time
            return delta < 1000;
        })

        filteredPlusses.push(newPlus)

        setPlusses(filteredPlusses)
        
        // animate game character
        console.log("attack")
        setSprite(attack)
        // setTimeout(() => setClicked(false), 300)
    }

    const generatePlus = () => {
        return {
            time: Date.now(),
            style: {
                top: `${Math.floor(Math.random() * (0 - 100))}%`,
                left: `${Math.floor(Math.random() * (0 - 100))}%`,
                zIndex: 2
            },
        }
    }
    
    // const PlusInstance = ({style}) => {
    //     return (
    //         <p className={`plus`}>+1</p>
    //     )
    // }

  return (
    <div className='game-container'>
        <div className='game-clickable-area' onClick={() => clickAnimation()}>
            {/* <Parallax /> */}
            <StatScreen/>
            <Resources setResources={setResources}/>
            <SpriteAnimator
                width={200}
                height={190}
                sprite={sprite}
                shouldAnimate={true}
                fps={10}
                startFrame={0}
                scale={.5}
                stopLastFrame={sprite === attack ? true : false}
                //reset={!animate}
                className='sprite'
                onEnd={() => setSprite(hero)}
            />

            {/* <PlusGenerator generatePlus={generatePlus} PlusInstance={PlusInstance} setPlusses={setPlusses}>
            </PlusGenerator> */}
        </div>
    </div>
  )
}

export default Game