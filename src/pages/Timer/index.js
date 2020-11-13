import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/minuteur-white.png'
import PageSubTitle from '../../components/PageSubTitle'


const Timer = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Minuteur</PageTitle>
                <PageSubTitle icon={titleIcon}>Durée du minuteur</PageSubTitle>
            </Layout>
        </div>
    );
}

export default Timer