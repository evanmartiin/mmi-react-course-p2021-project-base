import React from 'react'
import Menu from '../Menu'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Img1 from '../../assets/images/return-white.png'
import LittlePlayer from '../LittlePlayer/index.js'

import './styles.css'

const Layout = (props) => {
  const { children, removeMenu, removeReturn, backTo, currentListening } = props;
  return (
    <div className="layout">
      {!removeReturn &&
        <Link to={backTo}><img className="return" src={Img1} alt="Retour"></img></Link>
      }
      {!removeMenu &&
        <Menu />
      }
      {children}
      {!removeMenu && !currentListening &&
        <div className="menuVoid1" />
      }
      {!removeMenu && currentListening &&
        <div className="menuVoid2" />
      }
      {currentListening && 
        <LittlePlayer />
      }
    </div>
  )
}

Layout.defaultProps = {
  removeMenu: false,
  removeReturn: false,
  currentListening: false
}

Layout.propTypes = {
  removeMenu: PropTypes.bool.isRequired,
  removeReturn: PropTypes.bool.isRequired,
  backTo: PropTypes.string,
  currentListening: PropTypes.bool.isRequired
}

export default Layout
