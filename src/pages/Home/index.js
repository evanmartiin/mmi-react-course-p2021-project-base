import React from 'react'
// import { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import MusicType from '../../components/MusicType'
// import { SpotifyContext } from '../../components/SpotifyProvider'

const Home = () => {
    // const {
    //     spotifyApi,
    //     deviceId,
    //     token,
    //     player } = useContext(SpotifyContext)

    return (
        <div className="home">
            <Layout removeReturn>
                Home
                <br/><Link to="/login">Login</Link>
                <br/><Link to="/signup">Signup</Link>
                <br/><Link to="/form">Form</Link>
                <br/><Link to="/entrance">Entrance</Link>
                <br/><Link to="/artist">Artist</Link>
                <MusicType linkTo="/form" musicType="ASMR"/>
                <MusicType linkTo="/form" musicType="ASMR"/>
                <br/> 
                <MusicType linkTo="/form" musicType="ASMR"/>
                {/* <p>{token}</p> */}
            </Layout>
        </div>
    );
}

export default Home