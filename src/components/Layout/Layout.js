import React from 'react'
import Menu from '../Menu'
import Background from '../../assets/images/background-image.png'

import './styles.css'

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Menu />
      {children} 
    </div>
  )
}

export default Layout
