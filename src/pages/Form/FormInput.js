import React, { useState } from 'react'
import styles from './FormInput.module.css'

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
            </button>
        </div>
    )
}



export default FormInput