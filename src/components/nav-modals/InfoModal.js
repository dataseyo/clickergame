import React from 'react'
import { Modal } from '@mui/material'

import './styles.css'

const InfoModal = ({openInfo, setOpenInfo}) => {
  const handleClose = () => setOpenInfo(false);

  return (
    <Modal
        open={openInfo}
        onClose={handleClose}
    >
      <div className='info-modal'>
        <h3>Info</h3>
      </div>
    </Modal>
  )
}

export default InfoModal