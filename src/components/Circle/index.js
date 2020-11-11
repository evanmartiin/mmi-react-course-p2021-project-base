import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Circle = (props) => {
    const { isFull } = props;
    return (
        <div className={isFull ? 'fullCircle' : 'emptyCircle'}></div>
    )
}

Circle.defaultProps = {
    isFull: false
}

Circle.propTypes = {
    isFull: PropTypes.bool.isRequired
}

export default Circle
