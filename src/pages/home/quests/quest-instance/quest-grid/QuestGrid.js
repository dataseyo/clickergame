import React, {useEffect, useState} from 'react'
import { SpriteAnimator } from 'react-sprite-animator'

import './styles.css'
import hero from '../../../../../assets/hero.png'

const QuestGrid = () => {
    const grid = [
        1, 2, 3, 4,
        6, 7, 8, 9,
        10, 11, 12, 13,
        14, 15, 16, 17
    ]

    const [gridLocation, setGridLocation] = useState(13)
    const [monsterLocation, setMonsterLocation] = useState(1)

    useEffect(() => {
        // randomize monster locations
        const randInt = Math.floor(Math.random() * grid.length)
        setMonsterLocation(grid[randInt])
    }, [])
    
    const onMove = (event) => {
        var name = event.target.getAttribute('name')
        setGridLocation(name)
        console.log(name)
    }

  return (
    <div className='quest-grid'>
        {
            grid.map((position, index) => {
                return (
                    <div
                        key={index} 
                        name={index}
                        className='quest-grid-item'
                        onClick={(event) => onMove(event)}
                    >

                    {/* render player character */}
                    {index == gridLocation ? 
                        <SpriteAnimator
                            width={200}
                            height={190}
                            sprite={hero}
                            shouldAnimate={false}
                            fps={10}
                            startFrame={0}
                            scale={2.5}
                            //reset={!animate}
                            className='sprite'
                    />
                        :
                        null
                    }

                    {/* render monsters/items */}
                    {index == monsterLocation ? 
                        <p>Monster</p>
                        :
                        null
                    }
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default QuestGrid