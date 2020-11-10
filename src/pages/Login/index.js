import React from 'react'
import Layout from '../../components/Layout/Layout'
import Input from '../../components/Input/index'

const Login = () => {
    return (
        <div>
            <Layout removeMenu>
                Login
                <Input type="password"/>
                <Input type="email"/>
            </Layout>
        </div>
    );
}

export default Login