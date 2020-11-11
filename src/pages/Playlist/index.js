import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/tesplaylists-white.png'

const Playlist = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Tes playlists</PageTitle>
            </Layout>
        </div>
    );
}

export default Playlist