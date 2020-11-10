import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/index'

import './styles.css'

const Login = () => {
    return (
        <div>
            <Layout removeMenu>
                <div className="loginForm">
                    <div className="marginInput">
                        <Input type="email" placeholder="Mail" label="Adresse mail :"/>
                    </div>
                    <Input type="password" placeholder="Mot de passe" label="Mot de passe :"/>
                    <p className="forgetPass">Mot de passe oublié</p>
                </div>
            </Layout>
        </div>
    );
}

export default Login