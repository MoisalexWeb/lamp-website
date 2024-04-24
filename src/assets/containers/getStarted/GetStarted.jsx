import React from 'react'
import "./GetStarted.scss"
import img from "/images/join-lamp.png"
import Lamp from '../../components/lamp/Lamp'
import useValidEmail from './useValidEmail'

const GetStarted = () => {

    const { error, validEmail } = useValidEmail()

    return (
        <section className="get-started">
            <div className="get-started__container">

                <Lamp img={img} textOrientation="center" textPosition="center-bottom" />

                <div className="get-started__texts">
                    <h2 className="section-title">get started</h2>
                    <p className="section-description">Do not miss it, join us and get<br />interesting discounts with us.</p>

                    <form className="get-started__texts__form" onSubmit={validEmail}>
                        <input type="email" name="email" className="get-started__texts__form-email" placeholder="Enter your email" />
                        <button type="submit" className="get-started__texts__form-submit">join now</button>
                        {error && <span className="get-started__texts__form-error">{error}</span>}
                    </form>
                </div>

            </div>
        </section>
    )
}

export default GetStarted