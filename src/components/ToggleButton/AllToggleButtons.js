import React from 'react'
import styles from './ToggleButton.module.css'
import RandomButton from './index.js'
import LoopButton from './LoopButton.js'
import TimerButton from './TimerButton.js'

const AllToggleButtons = () => {
    return (
        <div className={styles.allToggleButtons}>
            <RandomButton />
            <LoopButton />
            <TimerButton />
        </div>
    )
}

export default AllToggleButtons