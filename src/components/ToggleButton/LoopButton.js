import React, { useState } from 'react'
import styles from './ToggleButton.module.css'

import Loopwhite from '../../assets/images/Loop-white.png'
import Loopblue from '../../assets/images/Loop-blue.png'

const LoopButton = (props) => {
    const {children} = props
    
    const [loopIsClicked,updateLoopIsClicked] = useState(false)
    const toggleLoopmClick = () => {
        updateLoopIsClicked(!loopIsClicked)
    }

    return (
        <div className={styles.buttonDiv}>
            <button type="button" className={loopIsClicked ? styles.isLikedTrue : styles.isLikedFalse} onClick={toggleLoopmClick}>
                {children}
                <img src={loopIsClicked ?  Loopblue : Loopwhite} alt="Aimer"/>
            </button>
            <p>En boucle</p>
        </div>
    )
}



export default LoopButton