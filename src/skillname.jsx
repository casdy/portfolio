import React from 'react'
import "./index.css";
const Skillname = ({ iconImage, name }) => {

    return (
        <div>
            <div>
                <img className='skill-grid' src={iconImage} alt={name}></img>
                <p name={name}>{name}</p>
            </div>
        </div>

    )
}

export default Skillname