import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import MusicType from '../../components/MusicType'
import './styles.css'
import ASMRType from '../../assets/images/ASMR.png'
import respiration from '../../assets/images/respiration.png'
import meditation from '../../assets/images/meditation.png'
import ambiance from '../../assets/images/ambiance.png'
import Line from '../../components/Line'
import PlaylistHorizontalScroll from '../../components/HorizontalScroll'
import HomeTitle from '../../components/HomeTitle'
import ForYouIcon from '../../assets/images/mixhibernation-white.png'
import YourListenIcon from '../../assets/images/casque.png'
import EyeIcon from '../../assets/images/eye-white.png'
import YourPlaylist from '../../assets/images/tesplaylists-white.png'



const Home = () => {
    return (
        <div className="home">
            <Layout removeReturn>
            <h1 className="homeTitle">Bonne nuit </h1>
                <HomeTitle icon={ForYouIcon}>Pour toi</HomeTitle>
                    <div className="preferences">
                        <div className="preferencesTop">
                            <MusicType linkTo="/form"  imageType={ASMRType} title="ASMR"/>
                            <MusicType linkTo="/form"  imageType={meditation} title="Méditation"/>
                        </div>
                        <div className="preferencesBottom">
                            <MusicType linkTo="/form"  imageType={respiration} title="Respiration"/>
                            <MusicType linkTo="/form"  imageType={ambiance} title="Ambiance"/>
                        </div>
                    </div>
                <div className="homeLine"><Line /></div>
                <HomeTitle icon={YourListenIcon}>Dernières écoutes</HomeTitle>
                <PlaylistHorizontalScroll />
                <HomeTitle icon={EyeIcon}>Découvrir</HomeTitle>
                <PlaylistHorizontalScroll />
                <HomeTitle icon={YourPlaylist}>Playlists</HomeTitle>
                <PlaylistHorizontalScroll />
                <br/><Link to="/login">Login</Link>
                <br/><Link to="/signup">Signup</Link>
                <br/><Link to="/form">Form</Link>
                <br/><Link to="/entrance">Entrance</Link>
                <br/><Link to="/artist">Artist</Link> 
            </Layout>
        </div>
    );
}

export default Home