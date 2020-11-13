import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/reveil-white.png'
import PageSubTitle from '../../components/PageSubTitle'
import ForMeButton from '../../components/ForMeButton'


const Alarm = () => {
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Réveil</PageTitle>
                <PageSubTitle icon={titleIcon}>Paramétrer un réveil</PageSubTitle>
                <ForMeButton> Je suis le bouton de réveil</ForMeButton>
                <PageSubTitle icon={titleIcon}>Tes réveils</PageSubTitle>
            </Layout>
        </div>
    );
}

export default Alarm