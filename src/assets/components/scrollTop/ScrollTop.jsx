



import React from 'react'
import useScrollTop from './useScrollTop'
import "./ScrollTop.scss"


const ScrollTop = () => {

    const { scrollToTop } = useScrollTop()

    return (
        <button onClick={scrollToTop} className="scroll-top" id="scroll-top-btn" aria-label="Scroll to top">
            <i className="ri-arrow-up-line"></i>
        </button>
    )
}

export default ScrollTop