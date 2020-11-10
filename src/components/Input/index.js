import React from 'react'

import './styles.css'

const Input = (props) => {
  const { type, placeholder, label } = props;
  return (
    <label className="label">
        {label}
        <input className="input" type={type} placeholder={placeholder}></input>
    </label>
  )
}

export default Input
