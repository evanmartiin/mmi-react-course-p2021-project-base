import React, { useContext } from 'react'
import AppContext from '../../Context.js'
import Layout from '../../components/Layout/Layout'
import PageTitle from '../../components/PageTitle/index'

import titleIcon from '../../assets/images/minuteur-white.png'
import PageSubTitle from '../../components/PageSubTitle'


const Timer = () => {
    const { setTrackName } = useContext(AppContext)
  
    const onInputChange = (event) => {
      setTrackName(event.target.value)
    }
    return (
        <div>
            <Layout backTo="/profile">
                <PageTitle icon={titleIcon}>Minuteur</PageTitle>
                <PageSubTitle icon={titleIcon}>Durée du minuteur</PageSubTitle>

                <input onChange={onInputChange}></input>
            </Layout>
        </div>
    );
}

export default Timer