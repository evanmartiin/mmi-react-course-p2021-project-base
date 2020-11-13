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


const Home = () => {
    return (
        <div className="home">
            <Layout removeReturn>
                <div className="preferences">
                    <div className="preferencesTop">
                        <MusicType linkTo="/form"  imageType={ASMRType} title="ASMR"/>
                        <MusicType linkTo="/form"  imageType={meditation} title="Podcast"/>
                    </div>
                    <div className="preferencesBottom">
                        <MusicType linkTo="/form"  imageType={respiration} title="Podcast"/>
                        <MusicType linkTo="/form"  imageType={ambiance} title="ASMR"/>
                    </div>
                </div>
                <Line />
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