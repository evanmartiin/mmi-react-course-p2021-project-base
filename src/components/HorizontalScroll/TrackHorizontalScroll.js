import React from 'react'
import PropTypes from 'prop-types'
import listening from '../../assets/images/music-note.png'

import './styles.css'

const TrackHorizontalScroll = (props) => {
    const { title, isListening } = props;
    return (
        <div className="trackHorizontalScroll">
            <div className="trackCoverHorizontalScroll">
                {isListening === true &&
                    <img className="listeningIcon" src={listening} alt="En écoute"/>
                }
                <img className="coverHorizontalScroll" src="https://static2.greatsong.net/artiste/276x276/foushee-99991200008421.jpg" alt="Cover"/>
            </div>
                <p className="title" >{title}</p>
        </div>
    )
}

TrackHorizontalScroll.defaultProps = {
    isListening: false,
}

TrackHorizontalScroll.propTypes = {
    isListening: PropTypes.bool.isRequired,
}

export default TrackHorizontalScroll













