import React, { useState } from 'react'
import styles from './FormInput.module.css'

import whiteMoon from '../../assets/images/moon-white.png'
import blueMoon from '../../assets/images/moon-blue.png'

const FormInput = (props) => {
    const {children} = props

    const [isLiked,updateIsLiked] = useState(false)

    const toggleLike = () => {
        updateIsLiked(!isLiked)
    }
    return (
        <div>
            <button type="button" className={isLiked ? styles.isLikedTrue : styles.isLikedFalse} onClick={toggleLike}>
                {children}
                <img src={isLiked ? blueMoon : whiteMoon} alt="Aimer"/>
            </button>
        </div>
    )
}



export default FormInput