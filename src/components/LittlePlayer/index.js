import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import BackIcon from '../../assets/images/playerback-grey.png'
import PlayIcon from '../../assets/images/playerplay-grey.png'
import PauseIcon from '../../assets/images/playerpause-grey.png'
import NextIcon from '../../assets/images/playernext-grey.png'

const LittlePlayer = () => {
    const [isPaused, updateisPaused] = useState(false)
    const togglePaused = () => {
        updateisPaused(!isPaused)
    }

    const [isOpened, updateisOpened] = useState(false)
    const toggleOpened= () => {
        updateisOpened(!isOpened)
        console.log(isOpened)
    }

    return (
        <div className={isOpened ? `bigPlayer`: `littlePlayer`}>
            <button className="toggleOpenedButton" onClick={toggleOpened}>
                <img className="playerCover" src="https://images.genius.com/67f4a03a0afd422150b0a88fd94fea0b.300x300x1.png" alt="Cover" />
                <div className="playerInfos">
                    <p className="artist">Klingande</p>
                    <p className="title">Alive</p>
                    <p className="theme">Classique</p>
                </div>
            </button>
            <div className="playerSettings">
                <img className="otherButtons" src={BackIcon} alt="Précédent" />
                <button onClick={togglePaused}><img className="playButton" src={isPaused ? PauseIcon : PlayIcon} alt="Jouer" /></button>
                <img className="otherButtons" src={NextIcon} alt="Suivant" />
            </div>
        </div>
    )
}

LittlePlayer.defaultProps = {
    isOpened: false
}

LittlePlayer.propTypes = {
    isOpened: PropTypes.bool.isRequired
}

export default LittlePlayer
