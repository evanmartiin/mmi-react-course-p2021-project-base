import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      Sleepy
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
    </div>
  )
}

export default Header
