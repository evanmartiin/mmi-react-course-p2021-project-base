import React from 'react'
import Layout from '../../components/Layout/Layout'
import MenuLinkProfile from './MenuLinkProfile'

import Img1 from '../../assets/images/mixhibernation-white.png'
import Img2 from '../../assets/images/tesplaylists-white.png'
import Img3 from '../../assets/images/telechargements.png'
import Img4 from '../../assets/images/minuteur-white.png'
import Img5 from '../../assets/images/reveil-white.png'
import Img6 from '../../assets/images/settings-white.png'

import Imgmoi from '../../assets/images/profile-white.png'

import styles from './MenuProfile.module.css'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <Layout removeReturn>
                <div className={styles.settings}>
                <Link to="/settings">
                    <img src={Img6} alt="Paramètres"></img>
                </Link>
                </div>

                <div className={styles.menuProfile}>
                    <div className={styles.titleProfile}>
                        <img src={Imgmoi} alt="Moi"></img>
                        <span>Moi</span>
                    </div>

                    <div className={styles.menuProfileItemBox} >
                        <MenuLinkProfile to="hibernation">
                            <img src={Img1} alt="Mix Hibernation"></img>
                            <span>Mix hibernation</span>
                        </MenuLinkProfile>
                    </div>

                    <div className={styles.menuProfileItemBox}>
                        <MenuLinkProfile to="playlist">
                            <img src={Img2} alt="Tes playlists"></img>
                            <span>Tes playlists</span>
                        </MenuLinkProfile>
                    </div>

                    <div className={styles.menuProfileItemBox}>
                        <MenuLinkProfile to="download">
                            <img src={Img3} alt="Téléchargements"></img>
                            <span>Téléchargements</span>
                        </MenuLinkProfile>
                    </div>

                    <div className={styles.menuProfileItemBox}>
                        <MenuLinkProfile to="timer">
                            <img src={Img4} alt="Minuteur"></img>
                            <span>Minuteur</span>
                        </MenuLinkProfile>
                    </div>

                    <div className={styles.menuProfileItemBox}>
                        <MenuLinkProfile to="alarm">
                            <img src={Img5} alt="Réveil"></img>
                            <span>Réveil</span>
                        </MenuLinkProfile>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Profile