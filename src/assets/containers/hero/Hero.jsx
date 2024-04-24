import React from 'react'
import "./hero.scss"
import Number from '../../components/number/Number'
import img from "/images/home-lamp.png"

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className="hero__texts">
                    <span className="hero__texts-legend">The best light bulbs</span>
                    <h1 className="hero__texts-title">Unique Light<br />For You Home</h1>

                    <div className="hero__texts__buttons">
                        <button className="hero__texts__buttons-btn btn-main">discover</button>
                        <button className="hero__texts__buttons-btn btn-icon">
                            <i className="ri-play-circle-line"></i>
                            watch video
                        </button>
                    </div>

                    <div className="hero__texts__numbers">
                        <Number number="9k" text="premium product" />
                        <Number number="2k" text="happy customer" />
                        <Number number="28" text="awards winning" />
                    </div>
                </div>

                <div className="hero__image">
                    <figure className="hero__image__figure">
                        <img className="hero__image__figure-img" src={img} alt="Lamp" />
                        <figcaption className="hero__image__figure-text">light</figcaption>
                    </figure>
                </div>
            </div>

            <div className="hero-skew"></div>
        </section>
    )
}

export default Hero