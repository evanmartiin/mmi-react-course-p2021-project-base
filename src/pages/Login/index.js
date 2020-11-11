import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/index'
import Button from '../../components/Button'

import './styles.css'

const Login = () => {
    return (
        <div>
            <Layout removeMenu>
                <div className="loginForm">
                    <div className="marginInput">
                        <Input type="email" placeholder="Mail" label="Adresse mail :"/>
                    </div>
                    <div>
                        <Input type="password" placeholder="Mot de passe" label="Mot de passe :"/>
                        <p className="forgetPass">Mot de passe oublié</p>
                    </div>
                    <Button linkTo="/Home">Connecte-toi</Button>
                </div>
                <Link to="/Signup"><p className="textCircles">Pas de compte ?</p></Link>
            </Layout>
        </div>
    );
}

export default Login