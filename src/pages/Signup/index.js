import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/index'
import Button from '../../components/Button'
import Circle from '../../components/Circle'

import './styles.css'

const Signup = () => {
    return (
        <div>
            <Layout removeMenu backTo="/entrance">
                <div className="signupForm">
                    <div className="nameInput">
                        <h1>Bonsoir</h1>
                        <Input type="name" placeholder="Prénom"/>
                    </div>
                    <div className="marginInput">
                        <Input type="email" placeholder="Mail" label="Adresse mail :"/>
                    </div>
                    <div>
                        <Input type="password" placeholder="Mot de passe" label="Mot de passe :"/>
                        <Input type="password" placeholder="Confirmation"/>
                    </div>
                    <Button linkTo="/Form">Inscris-toi</Button>
                </div>
                <Link to="/Login"><p className="textCircles">Déjà un compte ?</p></Link>
                <div className="formCircles">
                    <Circle isFull/>
                    <Circle />
                </div>
            </Layout>
        </div>
    );
}

export default Signup