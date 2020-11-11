import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/minuteur-white.png'

const Timer = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Minuteur</PageTitle>
            </Layout>
        </div>
    );
}

export default Timer