import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'
import AllToggleButtons from '../../components/ToggleButton/AllToggleButtons'
import Playlist from '../../components/Playlist/index'

import titleIcon from '../../assets/images/mixhibernation-white.png'

const Hibernation = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Mix hibernation</PageTitle>
                <AllToggleButtons />
                <Playlist />
            </Layout>
        </div>
    );
}

export default Hibernation