import React from 'react'
import { Modal } from '@mui/material'

import './styles.css'

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


      </div>
    </Modal>
  )
}

export default BestiaryModal