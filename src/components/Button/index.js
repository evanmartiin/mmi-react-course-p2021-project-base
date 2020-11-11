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
          <span className="textButton">{children}</span>
          <img src={Img} alt="Confirmer"></img>
        </button>
      </Link>
    </div>
  )
}

export default Button
