import React from 'react'
import Menu from '../Menu'

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
