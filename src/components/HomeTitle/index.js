import React from 'react'

import './styles.css'

const HomeTitle = (props) => {
    const { children, icon } = props;

    return (
        <div className="HomeTitle">
            <img src={icon} alt="Icone du titre"/>
            <p>{children}</p>
        </div>
    )
}

export default HomeTitle
