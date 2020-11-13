import React from 'react'
import PropTypes from 'prop-types'
import Like from '../Like/index'
import TrackSettings from '../TrackSettings/index'
import listening from '../../assets/images/music-note.png'

import './styles.css'

const Track = (props) => {
    const { artist, title, theme, isListening, liked, openSettings } = props;
    return (
        <div className="track">
            <div className="trackCover">
                {isListening === true &&
                    <img className="listeningIcon" src={listening} alt="En écoute"/>
                }
                <img className="cover" src="https://static2.greatsong.net/artiste/276x276/foushee-99991200008421.jpg" alt="Cover"/>
            </div>
            <div className="trackInfos">
                <p className="artist">{artist}</p>
                <p className="title">{title}</p>
                <p className="theme">{theme}</p>
            </div>
            <div className="trackSettings">
                <Like liked={liked}/>
                <TrackSettings openSettings={openSettings}/>
            </div>
        </div>
    )
}

Track.defaultProps = {
    isListening: false,
    liked: false
}

Track.propTypes = {
    isListening: PropTypes.bool.isRequired,
    liked: PropTypes.bool
}

export default Track
