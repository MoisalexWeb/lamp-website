import { useEffect } from "react"


const useScrollTop = () => {

    const handleScroll = () => {
        const scrollTopButton = document.getElementById("scroll-top-btn")

        if (window.scrollY >= 700) scrollTopButton.classList.add("show-scroll-top")
        else scrollTopButton.classList.remove("show-scroll-top")
    }
    
    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = () => window.scrollTo(0, 0)

    return {
        scrollToTop
    }

}

export default useScrollTop