import { useEffect } from "react"

const useNavbarOnScroll = () => {

    const handleScroll = () => {
        const header = document.querySelector(".header")

        if (window.scrollY >= 130) {
            header.classList.add("header2")
        }
        else {
            header.classList.remove("header2")
        }
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
}

export default useNavbarOnScroll