import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'
import AllToggleButtons from '../../components/ToggleButton/AllToggleButtons'
import Playlist from '../../components/Playlist/index'

import titleIcon from '../../assets/images/telechargements.png'

const Download = () => {
    return (
        <div>
            <Layout backTo="/profile" currentListening>
                <PageTitle icon={titleIcon}>Téléchargements</PageTitle>
                <AllToggleButtons />
                <Playlist />
            </Layout>
        </div>
    );
}

export default Download