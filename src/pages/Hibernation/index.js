import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/mixhibernation-white.png'

const Hibernation = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Mix hibernation</PageTitle>
            </Layout>
        </div>
    );
}

export default Hibernation