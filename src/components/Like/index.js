import React, { useState } from 'react'
import PropTypes from 'prop-types'
import likedIcon from '../../assets/images/like-full.png'
import unlikedIcon from '../../assets/images/like-empty.png'

import './styles.css'

const Like = (props) => {
    const { liked } = props;
    const [isLiked, updateisLiked] = useState(liked)

    const toggleLiked = () => {
        updateisLiked(!isLiked)
    }

    return (
        <button className="like" onClick={toggleLiked}>
            <img src={isLiked ? likedIcon : unlikedIcon} alt="Aimer"/>
        </button>
    )
}

Like.defaultProps = {
    liked: false
}

Like.propTypes = {
    liked: PropTypes.bool.isRequired
}

export default Like
