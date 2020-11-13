import React, { useState } from 'react'
import PropTypes from 'prop-types'
import settingsIcon from '../../assets/images/track-settings.png'
import TrackSettingsWindow from '../TrackSettingsWindow'

import styles from './styles.module.css'

const TrackSettings = (props) => {
    const { openSettings } = props;
    const [isOpenSettings, updateisOpenSettings] = useState(openSettings)
    
    const toggleOpenSettings = () => {
        updateisOpenSettings(!isOpenSettings)
    }
    
    return (
        <div>
        <button className={styles.trackSettingsIcon} onClick={toggleOpenSettings}>
            <img src={settingsIcon} alt="Paramètres" />
        </button>

        <div className={isOpenSettings ? styles.displayTrackSettingsWindow : styles.displayTrackSettingsWindowNone}>
           <TrackSettingsWindow />
        </div>
        </div>
    )
}

TrackSettings.defaultProps = {
    openSettings : false
}

TrackSettings.propTypes = {
    openSettings: PropTypes.bool.isRequired
}

export default TrackSettings
