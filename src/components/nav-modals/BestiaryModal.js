import React from 'react'
import { Modal } from '@mui/material'

import './styles.css'

const BestiaryGrid = () => {
    const grid = []
    for (var i = 1; i < 31; i++) {
        grid.push(i)
    }

    return (
        <div className='bestiary-grid'>
            {grid.map(item => {
                return (
                    <div className='bestiary-grid-item'>
                        
                    </div>
                )
            })}
        </div>
    )
}

const BestiaryModal = ({openBestiary, setOpenBestiary}) => {
  const handleClose = () => setOpenBestiary(false);

  return (
    <Modal
        open={openBestiary}
        onClose={handleClose}
    >
      <div className='info-modal'>
        <h3>Bestiary</h3>
        <hr/>
        {/* display grid of ? if user hasn't seen beast,
            and display beast if user has 
        */}

        <BestiaryGrid />
      </div>
    </Modal>
  )
}

export default BestiaryModal