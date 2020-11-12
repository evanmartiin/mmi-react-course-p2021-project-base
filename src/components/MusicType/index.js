import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

// import './styles.css'
// import Img from '../../assets/images/arrow-blue.png'

const MusicType = (props) => {
  const { linkTo, musicType } = props;
  return (
    <Link to={linkTo}>
      <div className={styles.musicType}>
        <h1 className={styles.titleMusicType}>{musicType}</h1>
      </div>
    </Link>
  )
}

export default MusicType
