import React from 'react'
// import { Link } from 'react-router-dom'

import './styles.css'
// import Img from '../../assets/images/arrow-blue.png'

const ForMeButton = (props) => {
  const { children} = props
  return (
    <div>
      <button className='ForMeButton'> 
        {children}
      </button>
    </div>
  )
}

export default ForMeButton
