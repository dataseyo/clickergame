import React, { useState } from 'react'
import { Modal } from '@mui/material'

import './styles.css'

const SettingsModal = ({openSettings, setOpenSettings}) => {
    const handleClose = () => setOpenSettings(false);

    const reset = () => {
        localStorage.clear()
    }
   return (
       <Modal
        open={openSettings}
        onClose={handleClose}
       >
           <div className='settings-modal'>
               <h3>Settings</h3>
               <button onClick={() => reset()}>Reset Game</button>
           </div>
       </Modal>
  )
}

export default SettingsModal