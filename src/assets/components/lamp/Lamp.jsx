import React from 'react'
import "./Lamp.scss"

const Lamp = ({ img, textOrientation, textPosition }) => {
    return (
        <figure className={`lamp ${textOrientation}`}>
            <img className="lamp-img" src={img} alt="Lamp" />
            <figcaption className={`lamp-text ${textPosition}`}>light</figcaption>
        </figure>
    )
}

export default Lamp