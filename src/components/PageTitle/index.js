import React from 'react'

import './styles.css'

const PageTitle = (props) => {
    const { children, icon } = props;

    return (
        <div className="pageTitle">
            <img src={icon} alt="Icone du titre"/>
            <p>{children}</p>
        </div>
    )
}

PageTitle.defaultProps = {
}

PageTitle.propTypes = {
}

export default PageTitle
