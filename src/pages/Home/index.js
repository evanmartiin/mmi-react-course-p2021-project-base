import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Layout removeReturn>
                Home
                <br/><Link to="/login">Login</Link>
                <br/><Link to="/form">Form</Link>
                <br/><Link to="/Entrance">Entrance</Link>
            </Layout>
        </div>
    );
}

export default Home