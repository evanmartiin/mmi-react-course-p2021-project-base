import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/reveil-white.png'

const Alarm = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Réveil</PageTitle>
            </Layout>
        </div>
    );
}

export default Alarm