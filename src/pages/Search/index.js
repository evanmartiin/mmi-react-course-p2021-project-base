import React from 'react'
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

const Search = () => {
    return (
        <div>
            <Layout removeReturn>
                <SearchInput />
                <Line />
                <div className="preferences">
                    <div className="preferencesTop">
                        <MusicType linkTo="/form"  imageType={ASMRType} title="ASMR"/>
                        <MusicType linkTo="/form"  imageType={meditation} title="Podcast"/>
                    </div>
                    <div className="preferencesBottom">
                        <MusicType linkTo="/form"  imageType={respiration} title="Podcast"/>
                        <MusicType linkTo="/form"  imageType={ambiance} title="Podcast"/>
                    </div>
                    <div className="preferencesTop2">
                        <MusicType linkTo="/form"  imageType={relax} title="Relax"/>
                        <MusicType linkTo="/form"  imageType={podcast} title="Podcast"/>
                    </div>
                    <div className="preferencesBottom">
                        <MusicType linkTo="/form"  imageType={enfants} title="Podcasts"/>
                        <MusicType linkTo="/form"  imageType={classique} title="Podcast"/>
                    </div>
                </div>
                <Playlist />
            </Layout>
        </div>
    );
}

export default Search