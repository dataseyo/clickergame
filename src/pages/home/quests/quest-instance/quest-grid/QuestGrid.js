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
    const [bossLocation, setBossLocation] = useState(2)

    useEffect(() => {
        // randomize monster locations
        var randInt1 = 1;
        var randInt2 = 1;
        
        randInt1 = Math.floor(Math.random() * grid.length - 1)
        setMonsterLocation(grid[randInt1])

        // generate a second different random number
        while (randInt1 == randInt2) {
            randInt2 = Math.floor(Math.random() * grid.length - 1)
        }

        setBossLocation(grid[randInt2])
    }, [])
    
    const onMove = (event) => {
        var name = event.target.getAttribute('name')
        setGridLocation(name)
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

                    {index == bossLocation ? 
                        <p>Boss</p>
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