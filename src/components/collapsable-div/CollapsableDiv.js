import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const CollapsableDiv = ({title, children}) => {
  const [show, setShow] = useState(false)

  return (
    <div className='collapsable-div-container'>
      <div onClick={() => setShow(!show)} className='collapsable-div-header'>
        <h3 className='collapsable-div-title'>{title}</h3>
        {show ?
          <FontAwesomeIcon icon={faChevronDown} className='collapsable-div-icon'/>
          :
          <FontAwesomeIcon icon={faChevronUp} className='collapsable-div-icon'/>
        }
      </div>

      {show ? 
        <div className='collapsable-div'>
          {children}
        </div>
        :
        null
      }
    </div>
  )
}

export default CollapsableDiv