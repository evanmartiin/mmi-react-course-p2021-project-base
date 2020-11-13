import React from 'react'
import searchIcon from '../../assets/images/search-white.png'

import './styles.css'

const SearchInput = (props) => {

    return (
        <div className="searchInput">
            <img src={searchIcon} alt="searchIcon"/>
            <input className="searchInputWhereWeClick" placeholder="Recherche..." />
        </div>
            
    )
}

export default SearchInput
