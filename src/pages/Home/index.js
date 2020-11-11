import React from 'react'
import Layout from '../../components/Layout/Layout'
import Track from '../../components/Track/index'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Layout removeReturn>
                Home
                <br/><Link to="/login">Login</Link>
                <br/><Link to="/Signup">Signup</Link>
                <br/><Link to="/form">Form</Link>
                <br/><Link to="/Entrance">Entrance</Link>
                <Track artist="Foushée" title="Deep End" theme="Musique relaxante" isListening/>
                <Track artist="Foushée" title="Deep End" theme="Musique relaxante"/>
            </Layout>
        </div>
    );
}

export default Home