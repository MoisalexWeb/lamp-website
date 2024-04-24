import { useState, useEffect } from "react"

const useMobileMenu = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    // Functions to hide or show mppbile menu when click on hamburger button or in close menu button
    const showMenu = () => setMobileMenu(true)
    const hideMenu = () => setMobileMenu(false)
    
    // Hide mobile when is active and resize window
    useEffect(() => {
        
        const hideMenuOnResize = () => {
            if (!mobileMenu) return
            if (window.innerWidth >= 768) setMobileMenu(false)
        }

        window.addEventListener("resize", hideMenuOnResize)
        
        return () => {
            window.removeEventListener("resize", hideMenuOnResize)
        }
    })
    


    return {
        mobileMenu,
        showMenu,
        hideMenu
    }
}

export default useMobileMenu