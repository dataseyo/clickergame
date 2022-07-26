import React from 'react'

import './styles.css'

// stamina controls how much one can train strength
// knowledge controls how much one can level magic
const Resources = ({stamina, knowledge}) => {
  return (
    <div className='resources-container'>
        {/* fill resource bar based on stamina value */}
        <div className='stamina'>
            {/* <p className='resources-text'>100/100</p> */}
        </div>

        <div className='knowledge'>
            {/* <p className='resources-text'>100/100</p> */}
        </div>
    </div>
  )
}

export default Resources