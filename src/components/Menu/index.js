import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import Img1 from '../../assets/images/home-white.png'
import Img2 from '../../assets/images/search-white.png'
import Img3 from '../../assets/images/profile-white.png'

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/home" className={styles.menuItem}>
          <img src={Img1} alt="Accueil"></img>
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/search" className={styles.menuItem}>
          <img src={Img2} alt="Recherche"></img>
          Recherche
        </Link>
      </li>
      <li>
        <Link to="/profile" className={styles.menuItem}>
          <img src={Img3} alt="Moi"></img>
          Moi
        </Link>
      </li>
    </ul>
  )
}

export default Menu
