import React from "react"
import { Link } from "react-router-dom"

const MenuLinkProfile = (props) => {
    
    return (
        <div>
            <Link to={props.to}>
            {props.children}
            </Link>
        </div>
    )

}

export default MenuLinkProfile