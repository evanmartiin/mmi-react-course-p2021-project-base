import React from 'react'

import './styles.css'

const Input = (props) => {
  const { type } = props;
  return (
    <input className="input" type={type}></input>
  )
}

export default Input
