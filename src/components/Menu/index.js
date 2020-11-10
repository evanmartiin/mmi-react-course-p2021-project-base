import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
      <ul className={styles.menu}>
        <li>
          <Link to="/home" className={styles.menuItem}>Accueil</Link>
        </li>
        <li>
          <Link to="/search" className={styles.menuItem}>Recherche</Link>
        </li>
        <li>
          <Link to="/profile" className={styles.menuItem}>Moi</Link>
        </li>
      </ul>
  )
}

export default Menu
