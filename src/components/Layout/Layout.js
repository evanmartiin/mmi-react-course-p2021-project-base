import React from 'react'
import Menu from '../Menu'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Img1 from '../../assets/images/return-white.png'

import './styles.css'

const Layout = (props) => {
  const { children, removeMenu, removeReturn, backTo } = props;
  return (
    <div className="layout">
      {removeReturn === false &&
        <Link to={backTo}><img className="return" src={Img1} alt="Retour"></img></Link>
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
  removeReturn: PropTypes.bool.isRequired,
  backTo: PropTypes.string
}

export default Layout
