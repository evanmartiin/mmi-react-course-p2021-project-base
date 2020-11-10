import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/index'

import './styles.css'

const Login = () => {
    return (
        <div>
            <Layout removeMenu>
                <div className="loginForm">
                    <Input type="email" placeholder="Mail" label="Adresse mail :"/>
                    <Input type="password" placeholder="Mot de passe" label="Mot de passe :"/>
                    Mot de passe oublié
                </div>
            </Layout>
        </div>
    );
}

export default Login