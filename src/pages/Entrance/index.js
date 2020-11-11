import React from 'react'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button'
import Logo from '../../assets/images/logo.png'
import './index.css'

const Entrance = () => {
    return (
        <div>
            <Layout removeMenu removeReturn>
                <div className="Entrance">
                    <img className="Logo" src={Logo} alt="Recherche"></img>
                    <Button linkTo="/Home">Inscris-toi</Button>
                    <Button linkTo="/Login">Connecte-toi</Button>
                </div>
            </Layout>
        </div>
    );
}

export default Entrance