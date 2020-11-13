import React from 'react'
import Layout from '../../components/Layout/Layout'

import titleIcon from '../../assets/images/settings-white.png'
import PageTitle from '../../components/PageTitle'

const Settings = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Paramètres</PageTitle>
            </Layout>
        </div>
    );
}

export default Settings