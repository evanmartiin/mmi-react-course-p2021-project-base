import React, { Children } from 'react'
import Layout from '../../components/Layout/Layout'
import MenuLinkProfile from './MenuLinkProfile'

const Profile = () => {
    return (
        <div>
       <Layout>
        <ul>
           <MenuLinkProfile to="home">
               BLABLA 1
           </MenuLinkProfile>

           <MenuLinkProfile to="home2">
               BLABLA 2
           </MenuLinkProfile>

           <MenuLinkProfile to="home3">
               BLABLA 3
           </MenuLinkProfile>

           <MenuLinkProfile to="home4">
               BLABLA 4
           </MenuLinkProfile>
        </ul>
        </Layout>
        </div>
    );
}

export default Profile