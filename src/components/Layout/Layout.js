import React from 'react'
import Menu from '../Menu'
import PropTypes from 'prop-types'

import './styles.css'

const Layout = (props) => {
  const { children, removeMenu } = props;
  return (
    <div className="layout">
      {removeMenu === false &&
        <Menu />
      }
      {children} 
    </div>
  )
}

Layout.defaultProps = {
  removeMenu: false
}

Layout.propTypes = {
  removeMenu: PropTypes.bool.isRequired
}

export default Layout
