import React, { Children } from 'react'
import Layout from '../../components/Layout/Layout'
import MenuLinkProfile from './MenuLinkProfile'

import Img1 from '../../assets/images/mixhibernation-white.png'
import Img2 from '../../assets/images/tesplaylists-white.png'
import Img3 from '../../assets/images/telechargements.png'
import Img4 from '../../assets/images/minuteur-white.png'
import Img5 from '../../assets/images/reveil-white.png'

const Profile = () => {
    return (
        <div>
       <Layout>
        <ul>
           <MenuLinkProfile to="home">
               <img src={Img1} alt="Mix Hibernation"></img> Mix hibernation   
           </MenuLinkProfile>

           <MenuLinkProfile to="home2">
                <img src={Img2} alt="Tes playlists"></img> Tes playlists
           </MenuLinkProfile>

           <MenuLinkProfile to="home3">
                <img src={Img3} alt="Téléchargements"></img> Téléchargements
           </MenuLinkProfile>

           <MenuLinkProfile to="home4">
                <img src={Img4} alt="Minuteur"></img> Minuteur
           </MenuLinkProfile>

           <MenuLinkProfile to="home4">
                <img src={Img5} alt="Réveil"></img> Réveil
           </MenuLinkProfile>
        </ul>
        </Layout>
        </div>
    );
}

export default Profile