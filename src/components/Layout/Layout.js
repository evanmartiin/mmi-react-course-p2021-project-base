import React from 'react'
import Menu from '../Menu'
import Background from '../../assets/images/background-image.png'

import './styles.css'

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <img className="Background"src={Background} alt="image de fond"></img>
      <Menu />
      {children} 
    </div>
  )
}

export default Layout
