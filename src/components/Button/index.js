import React from 'react'

import './styles.css'

const Button = (props) => {
  const { children } = props;
  return (
    <div>
      <button>{ children }</button>
    </div>
  )
}

export default Button
