import React from 'react'
import Layout from '../../components/Layout/Layout'

import titleIcon from '../../assets/images/settings-white.png'
import PageTitle from '../../components/PageTitle'
import ForMeButton from '../../components/ForMeButton'
import Tracks from './Tracks'

const Settings = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Paramètres</PageTitle>
                <ForMeButton> Modifier mon profil</ForMeButton>
                <ForMeButton> Me déconnecter</ForMeButton>
                 
                <Tracks />
            </Layout>
        </div>
    );
}

export default Settings