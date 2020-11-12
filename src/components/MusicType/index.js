import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'


const MusicType = (props) => {
  const { linkTo, imageType, title } = props;
  return (
    <Link to={linkTo}>
      <div className={styles.musicTypeASMR}>
        <img src={imageType} alt="Preferences"/>
        <h1>{title}</h1> 
      </div>
    </Link>
  )
}


export default MusicType
