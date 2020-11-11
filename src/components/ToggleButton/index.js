import React, { useState } from 'react'
import styles from './ToggleButton.module.css'

import Randomwhite from '../../assets/images/Random-white.png'
import Randomblue from '../../assets/images/Random-blue.png'

const ToggleButton = (props) => {
    const {children} = props
    
    const [isLiked,updateIsLiked] = useState(false)

    const toggleLike = () => {
        updateIsLiked(!isLiked)
    }
    return (
        <div>
            <button type="button" className={isLiked ? styles.isLikedTrue : styles.isLikedFalse} onClick={toggleLike}>
                {children}
                <img src={isLiked ? Randomblue : Randomwhite} alt="Aimer"/>
            </button>
        </div>
    )
}



export default ToggleButton