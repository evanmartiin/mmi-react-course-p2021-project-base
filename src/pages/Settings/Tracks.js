import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../components/SpotifyProvider'

const Tracks = () => {
    const { spotifyApi, deviceId } = useContext(SpotifyContext)

    const [tracks, setTracks] = useState([])
    useEffect(() => {
        const loadTracks = async ()=> {
            const results = await spotifyApi.searchTracks('jul', {limit: 5});
            setTracks(results.tracks.items)
        }
        loadTracks();
    }, [spotifyApi])

    const playSound = (uri) => {
        const data = {
            "device_id": deviceId,
            "uris": [uri]
        }
    
        spotifyApi.play(data)
            .then(function() {
                console.log('play')
            })
    }

    const pauseSound = (uri) => {
        const data = {
            "device_id": deviceId,
            "uris": [uri]
        }
    
        spotifyApi.paused(data)
            .then(function() {
                console.log('pause')
            })
    }
    

    return (
        <div>
            Tracks

            <ul>
                {tracks.map((track) => {
                    return (
                        <li key={track.id}>
                            {track.name}
                            <img src={track.album.images[2].url} alt={`Cover de ${track.album.name}`}/>
                            <button onClick={() => { playSound(track.uri) }}>Play</button>
                            <button onClick={() => { pauseSound(track.uri) }}>Pause</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default Tracks