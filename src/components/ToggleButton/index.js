import React, { useState } from 'react'
import styles from './ToggleButton.module.css'

import Randomwhite from '../../assets/images/Random-white.png'
import Randomblue from '../../assets/images/Random-blue.png'


const RandomButton = (props) => {
    const {children} = props
    
    const [randomIsClicked,updateRandomIsClicked] = useState(false)
    const toggleRandomClick = () => {
        updateRandomIsClicked(!randomIsClicked)
    }

    return (
        <div className={styles.buttonDiv}>
            <button type="button" className={randomIsClicked ? styles.isLikedTrue : styles.isLikedFalse} onClick={toggleRandomClick}>
                {children}
                <img src={randomIsClicked ? Randomblue : Randomwhite} alt="Aimer"/>
            </button>
            <p>Aléatoire</p>
        </div>
    )
}



export default RandomButton