import { useState } from "react"

const useValidEmail = () => {
    
    const [error, setError] = useState(null)

    const validEmail = ( e ) => {
        e.preventDefault()
        const regex = new RegExp(/^[a-zA-Z0-9ñ.-]+@[a-zA-Z]{2,7}\.[a-zA-Z]{2,4}$/)
        const email = e.target.email.value

        if (!regex.test(email)) {
            setError("Invalid email")
        } else {
            setError(null)
        }
    }

    return {
        error,
        validEmail
    }
}

export default useValidEmail