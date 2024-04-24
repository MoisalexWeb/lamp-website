import { useState, useEffect } from "react"

const useChangeTheme = () => {
    const [darkTheme, setDarkTheme] = useState(null)

    const THEMES = Object.freeze({
        dark: "dark",
        light: "light"
    })

    const changeTheme = () => setDarkTheme(!darkTheme)

    const getTheme = () => {
        if (localStorage.getItem("theme") === THEMES.dark) {
            setDarkTheme(true)
        } 
    }


    useEffect(() => {
        if (darkTheme === null) return

        const body = document.querySelector("body")

        if (darkTheme) {
            localStorage.setItem("theme", THEMES.dark)
            body.classList.add("dark-theme")
        } else {
            localStorage.setItem("theme", THEMES.light)
            body.classList.remove("dark-theme")
        }
    }, [darkTheme])

    

    useEffect(() => {
        getTheme()
    }, [])  

    

    return {
        darkTheme,
        changeTheme
    }
}


export default useChangeTheme