import React from 'react'
import Menu from '../Menu'
import PropTypes from 'prop-types'

import Img1 from '../../assets/images/return-white.png'

import './styles.css'

const Layout = (props) => {
  const { children, removeMenu, removeReturn } = props;
  return (
    <div className="layout">
      {removeReturn === false &&
        <img className="return" src={Img1} alt="Retour"></img>
      }
      {removeMenu === false &&
        <Menu />
      }
      {children} 
    </div>
  )
}

Layout.defaultProps = {
  removeMenu: false,
  removeReturn: false
}

Layout.propTypes = {
  removeMenu: PropTypes.bool.isRequired,
  removeReturn: PropTypes.bool.isRequired
}

export default Layout
