import React from 'react'

import './styles.css'

const PageSubTitle = (props) => {
    const { children, icon } = props;

    return (
        <div className="PageSubTitle">
            <img src={icon} alt="Icone du Sous-titre"/>
            <p>{children}</p>
        </div>
    )
}

export default PageSubTitle
