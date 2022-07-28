import React from 'react'
import { Modal } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHeart, faHatWizard } from '@fortawesome/free-solid-svg-icons'

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
        <hr/>
        <div className='info-modal-stats'>
          <div className='info-modal-sub-container'>
            <FontAwesomeIcon icon={faHeart} className='info-modal-icon'/>
            <p className='modal-text'> : Health </p>
          </div>

          <div className='info-modal-sub-container'>
            <FontAwesomeIcon icon={faDumbbell} className='info-modal-icon'/>
            <p className='modal-text'> : Strength </p>
          </div>

          <div className='info-modal-sub-container'>
            <FontAwesomeIcon icon={faHatWizard} className='info-modal-icon'/>
            <p className='modal-text'> : Magic </p>
          </div>
        </div>

        <hr/>


        <div>
          <div>
          <h4>Train</h4>
          <p className='modal-text'>
            Increase your strength and magic. But be careful, sometimes it might decrease them.
          </p>

          <h4>Quests</h4>
          <p className='modal-text'>
            Go on quests to find and fight monsters, earning XP to increase your level and unlock upgrades.
          </p>

          <h4>Upgrades</h4>
          <p className='modal-text'>
            Purchase upgrades with coins earned from slaying monsters or from random training encounters.
          </p>
          </div>
        </div>
        
      </div>
    </Modal>
  )
}

export default InfoModal