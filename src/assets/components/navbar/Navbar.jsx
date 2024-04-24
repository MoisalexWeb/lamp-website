import React from 'react'
import useNavbarOnScroll from './useNavbarOnScroll'
import useMobileMenu from "./useMobileMenu"
import useChangeTheme from './useChangeTheme'
import "./Navbar.scss"

const Navbar = () => {

    useNavbarOnScroll()
    const { mobileMenu, showMenu, hideMenu } = useMobileMenu()
    const { darkTheme, changeTheme } = useChangeTheme()

    return (
        <header className="header">
            <nav className="nav">
                <a href="#" className="nav-logo">
                    sun
                    <span>light</span>
                </a>

                <div className="nav__buttons">
                    <ul className={`nav__buttons__ul ${mobileMenu ? "show-menu" : ""}`}>
                        <li className="li-hamburger">
                            <button onClick={hideMenu} className="nav__buttons__ul-btn" aria-label="Close menu">
                                <i className="ri-close-fill"></i>
                            </button>
                        </li>
                        <li>
                            <a href="#home" className="nav__buttons__ul-link" onClick={hideMenu}>home</a>
                        </li>
                        <li>
                            <a href="#popular" className="nav__buttons__ul-link" onClick={hideMenu}>popular</a>
                        </li>
                        <li>
                            <a href="#choose-us" className="nav__buttons__ul-link" onClick={hideMenu}>choose</a>
                        </li>
                        <li>
                            <a href="#products" className="nav__buttons__ul-link" onClick={hideMenu}>products</a>
                        </li>
                    </ul>

                    <button onClick={changeTheme} className="nav__buttons-theme" aria-label="Change dark/light theme">
                        {darkTheme ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i> }
                    </button>

                    <button onClick={showMenu} className="nav__buttons-hamburger" aria-label="Open menu">
                        <i className="ri-menu-3-line"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar