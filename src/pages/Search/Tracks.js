import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from '../../components/SpotifyProvider'

const Tracks = () => {
    const { spotifyApi } = useContext(SpotifyContext)

    const [tracks, setTracks] = useState([])
    useEffect(() => {
        const loadTracks = async ()=> {
            const results = await spotifyApi.searchTracks('jul', {limit: 5});
            setTracks(results.tracks.items)
        }
        loadTracks();
    }, [spotifyApi])
    

    return (
        <div>
            Tracks

            <ul>
                {tracks.map((track) => {
                    return (
                        <div>
                            {track.name}
                            <img src={track.album.images[2].url} alt={`Cover de ${track.album.name}`}/>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}



export default Tracks