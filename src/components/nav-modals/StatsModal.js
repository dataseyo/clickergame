import React from 'react'
import { Modal } from '@mui/material'

import './styles.css'

const StatsModal = ({openStats, setOpenStats}) => {
  const handleClose = () => setOpenStats(false);

  return (
    <Modal
      open={openStats}
      onClose={handleClose}
    >
      <div className='stats-modal'>
        <h3>Stats</h3>
        <hr/>
      </div>
    </Modal>
  )
}

export default StatsModal