import React, { useEffect, useState } from 'react'

const useThemeDetector = () => {
    const [theme, setTheme] = useState("")

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark")
            document.documentElement.classList.add('dark')
        setTheme(theme ? theme : "light")
        return () => { }
    }, []);

    const toggle = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark')
        }

        // // Whenever the user explicitly chooses light mode
        // localStorage.theme = 'light'

        // // Whenever the user explicitly chooses dark mode
        // localStorage.theme = 'dark'

        // // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('theme')
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return { isDarkTheme: theme === "dark", toggle };
}

export default useThemeDetector