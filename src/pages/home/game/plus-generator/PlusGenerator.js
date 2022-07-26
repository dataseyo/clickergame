import React, { useState } from 'react'

import './styles.css'

const PlusGenerator = ({children, generatePlus, PlusInstance}) => {
    const plus = generatePlus()

  return (
    <div className='plus-wrapper'>
        <PlusInstance
            style={plus.style}
        />
        <div className='children'>
            {children}
        </div>
           
    </div>
  )
}

export default PlusGenerator