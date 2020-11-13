import React from 'react'
import settingsIcon from '../../assets/images/track-settings.png'

import './styles.css'

const TrackSettings = () => {
    return (
        <button className="trackSettingsIcon">
            <img src={settingsIcon} alt="Paramètres" />
        </button>
    )
}

export default TrackSettings
