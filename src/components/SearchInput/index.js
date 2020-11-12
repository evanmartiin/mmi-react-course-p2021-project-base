import React, { useState } from 'react'
import searchIcon from '../../assets/images/searchIcon.png'

import './styles.css'

const SearchInput = (props) => {
    const { type } = props;

    const [isVisible, updateisVisible] = useState(false)

    const toggleVisible = () => {
        updateisVisible(!isVisible)
    }

    return (
        <div className="searchInput">
            <img src={searchIcon} />
            <input className="searchInputWhereWeClick" placeholder="Recherche..." type={type} />
        </div>
            
    )
}

export default SearchInput
