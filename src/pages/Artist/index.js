import React from 'react'
import Layout from '../../components/Layout/Layout'
import AllToggleButtons from '../../components/ToggleButton/AllToggleButtons'
import Playlist from '../../components/Playlist/index'

import './styles.css'

const Artist = () => {
    return (
        <div>
            <Layout backTo="/home">
                <div className="headerArtist">
                    <img src="https://www.musicologie.org/Biographies/m/mozart.jpg" alt="Cover de l'artiste"/>
                    <figcaption>MOZART</figcaption>
                </div>
                <AllToggleButtons />
                <Playlist />
            </Layout>
        </div>
    );
}

export default Artist