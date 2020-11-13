import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import ASMRType from '../../assets/images/ASMR.png'
import respiration from '../../assets/images/respiration.png'
import meditation from '../../assets/images/meditation.png'
import ambiance from '../../assets/images/ambiance.png'
import MusicType from '../../components/MusicType'
import enfants from '../../assets/images/enfants.png'
import podcast from '../../assets/images/podcast.png'
import relax from '../../assets/images/relax.png'
import classique from '../../assets/images/classique.png'
import Line from '../../components/Line'
import SearchInput from '../../components/SearchInput'
import Playlist from '../../components/Playlist'
import styles from './styles.module.css'

const Search = (props) => {
    const [isVisible, updateisVisible] = useState(false)

    const toggleVisible = () => {
        updateisVisible(!isVisible)
    }
    return (
        <div>
            <Layout removeReturn>
                <div className="searchInputFromSearch" onClick={toggleVisible}>
                    <SearchInput />
                </div>
                <Line />
                <div className={isVisible ?  styles.preferencesNone : styles.preferences}>
                    <div className={styles.preferencesTop}>
                        <MusicType linkTo="/playlist"  imageType={ASMRType} title="ASMR"/>
                        <MusicType linkTo="/playlist"  imageType={meditation} title="Podcast"/>
                    </div>
                    <div className={styles.preferencesBottom}>
                        <MusicType linkTo="/playlist"  imageType={respiration} title="Podcast"/>
                        <MusicType linkTo="/playlist"  imageType={ambiance} title="Podcast"/>
                    </div>
                    <div className={styles.preferencesTop2}>
                        <MusicType linkTo="/playlist"  imageType={relax} title="Relax"/>
                        <MusicType linkTo="/playlist"  imageType={podcast} title="Podcast"/>
                    </div>
                    <div className={styles.preferencesBottom}>
                        <MusicType linkTo="/playlist"  imageType={enfants} title="Podcasts"/>
                        <MusicType linkTo="/playlist"  imageType={classique} title="Podcast"/>
                    </div>
                </div>
                <div className={isVisible ? styles.searchPlaylist : styles.searchPlaylistNone}>
                    <Playlist />
                </div>
            </Layout>
        </div>
    );
}

export default Search