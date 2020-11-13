import React, { useState } from 'react'
import showPass from '../../assets/images/pass-show.png'
import hidePass from '../../assets/images/pass-hide.png'

import './styles.css'

const Input = (props) => {
    const { type, placeholder, label } = props;

    const [isVisible, updateisVisible] = useState(false)

    const toggleVisible = () => {
        updateisVisible(!isVisible)
    }

    return (
        <label className="label">
            {label}
            {type === 'password' &&
                <div className="passDiv">
                    <input className="inputPass" type={isVisible ? 'text' : 'password'} placeholder={placeholder} />
                    <button className="buttonPass" onClick={toggleVisible}><img src={isVisible ? hidePass : showPass} alt="Afficher" /></button>
                </div>
            }
            {type === 'name' &&
                <input className="inputName" type="text" placeholder={placeholder} />
            }
            {type !== 'password' && type !== 'name' &&
                <input className="input" type={type} placeholder={placeholder} />
            }
        </label>
    )
}

export default Input
