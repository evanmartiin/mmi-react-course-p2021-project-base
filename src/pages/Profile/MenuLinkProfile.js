import React from "react"
import { Link } from "react-router-dom"

import styles from './MenuProfile.module.css'

const MenuLinkProfile = (props) => {
    
    return (
        <div>
            <Link to={props.to} className={styles.menuProfileItem}>
            {props.children}
            </Link>
        </div>
    )

}

export default MenuLinkProfile