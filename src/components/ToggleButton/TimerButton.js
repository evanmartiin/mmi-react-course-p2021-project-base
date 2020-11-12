import React, { useState } from 'react'
import styles from './ToggleButton.module.css'

import Timerwhite from '../../assets/images/Timer-white.png'
import Timerblue from '../../assets/images/Timer-blue.png'


const TimerButton = (props) => {
    const {children} = props
    
    const [timerIsClicked,updateTimerIsClicked] = useState(false)
    const toggleTimerClick = () => {
        updateTimerIsClicked(!timerIsClicked)
    }

    return (
        <div className={styles.buttonDiv}>
            <button type="button" className={timerIsClicked ? styles.isLikedTrue : styles.isLikedFalse} onClick={toggleTimerClick}>
                {children}
                <img src={timerIsClicked ? Timerblue : Timerwhite} alt="Aimer"/>
            </button>
            <p>Minuteur</p>
        </div>
    )
}



export default TimerButton