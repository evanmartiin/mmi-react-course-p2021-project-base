import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import LittleBackIcon from '../../assets/images/playerback-grey.png'
import LittlePlayIcon from '../../assets/images/playerplay-grey.png'
import LittlePauseIcon from '../../assets/images/playerpause-grey.png'
import LittleNextIcon from '../../assets/images/playernext-grey.png'
import BigBackIcon from '../../assets/images/playerback-white.png'
import BigPlayIcon from '../../assets/images/playerplay-white.png'
import BigPauseIcon from '../../assets/images/playerpause-white.png'
import BigNextIcon from '../../assets/images/playernext-white.png'
import Return from '../../assets/images/return-white.png'
import titleIcon from '../../assets/images/music-note.png'

import Like from '../Like'
import TrackSettings from '../TrackSettings'
import TimerButton from '../ToggleButton/TimerButton'

const Player = () => {
    const [isPaused, updateisPaused] = useState(false)
    const togglePaused = () => {
        updateisPaused(!isPaused)
    }

    const [isOpened, updateisOpened] = useState(false)
    const toggleOpened= () => {
        updateisOpened(!isOpened)
    }

    return (
        <div className={isOpened ? `bigPlayer`: `littlePlayer`}>
            <button className="toggleOpenedArrow" onClick={toggleOpened}>
                <img className="returnArrow" src={Return} alt="Retour"></img>
            </button>
            <div className="playerHeader">
                <p className="headerTitle"><img src={titleIcon} alt="Musique" />Classique</p>
                <TimerButton />
            </div>
            <button className="toggleOpenedButton" onClick={toggleOpened}>
                <img className="playerCover" src="https://images.genius.com/67f4a03a0afd422150b0a88fd94fea0b.300x300x1.png" alt="Cover" />
            </button>
            <div className="playerInfos">
                <button className="toggleOpenedButton" onClick={toggleOpened}>
                    <div className="playerText">
                        <p className="playerArtist">Klingande</p>
                        <p className="playerTitle">Alive</p>
                        <p className="playerTheme">Classique</p>
                    </div>
                </button>
                <div className="playerIcons">
                    <Like />
                    <TrackSettings />
                </div>
            </div>
            <div className="progressBar">
                <div className="progressLine"></div>
                <div className="progressTimes">
                    <p className="currentTime">1:07</p>
                    <p className="totalTime">3:02</p>
                </div>
            </div>
            <div className="playerSettings">
                <img className="otherButtons" src={isOpened ? BigBackIcon : LittleBackIcon} alt="Précédent" />
                <button onClick={togglePaused}><img className="playButton" src={isOpened ? (isPaused ? BigPauseIcon : BigPlayIcon) : (isPaused ? LittlePauseIcon : LittlePlayIcon)} alt="Jouer" /></button>
                <img className="otherButtons" src={isOpened ? BigNextIcon : LittleNextIcon} alt="Suivant" />
            </div>
        </div>
    )
}

Player.defaultProps = {
    isOpened: false
}

Player.propTypes = {
    isOpened: PropTypes.bool.isRequired
}

export default Player
