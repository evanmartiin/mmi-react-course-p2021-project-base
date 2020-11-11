import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import Img from '../../assets/images/arrow-blue.png'

const Button = (props) => {
  const { children, linkTo } = props;
  return (
    <div>
      <Link to={linkTo}>
        <button className="largeButton">
          {children}
          <img src={Img} alt="Continuer"></img>
        </button>
      </Link>
    </div>
  )
}

export default Button
