import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__item footer__item--logo">
                <h3 className="footer__item-title">SUN<span>LIGHT</span></h3>
                <p className="footer__item-text">We have a vision to make lighting evenly distributed to all parts of the earth.</p>
            </div>

            <div className="footer__item footer__item--about">
                <h3 className="footer__item-title">about</h3>
                <a href="#" className="footer__item-link">about us</a>
                <a href="#" className="footer__item-link">features</a>
                <a href="#" className="footer__item-link">new & blog</a>
            </div>

            <div className="footer__item footer__item--movement">
                <h3 className="footer__item-title">movement</h3>
                <a href="#" className="footer__item-link">what sunlight</a>
                <a href="#" className="footer__item-link">support us</a>
            </div>

            <div className="footer__item footer__item--company">
                <h3 className="footer__item-title">company</h3>
                <a href="#" className="footer__item-link">why sunlight</a>
                <a href="#" className="footer__item-link">capital</a>
                <a href="#" className="footer__item-link">security</a>
            </div>

            <div className="footer__item footer__item--social">
                <h3 className="footer__item-title">follow us</h3>
                <div className="footer__item__social">
                    <i className="ri-facebook-circle-line"></i>
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-line"></i>
                </div>
            </div>

            <div className="footer__copy">
                <p className="footer__copy-copy">© Copyright. All rights reserved</p>

                <div className="footer__copy__texts">
                    <a href="#" className="footer__item-link">terms & agreements</a>
                    <a href="#" className="footer__item-link">privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer