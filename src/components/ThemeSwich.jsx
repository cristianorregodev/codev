'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

export const ThemeSwitch = ({ show = true }) => {
    const [mounted, setMounted] = useState(false)
    const [checked, setChecked] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    const handleThemeChange = () => {
        if (theme === 'light') {
            setTheme('dark')
            setChecked(!checked)
        }
        if (theme === 'dark') {
            setTheme('light')
            setChecked(!checked)
        }
    }
    const currentTheme = theme === 'system' ? systemTheme : theme
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
        // if (currentTheme === 'dark') {
        //     setChecked(true)
        // }
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div
            className={`bg-dark-300 dark:bg-dark-700 p-1 rounded-md hover:bg-dark-700 dark:hover:bg-dark-300 transition-colors duration-300 ${
                !show && 'md:hidden'
            }`}
        >
            {currentTheme === 'dark' ? (
                <IoMdSunny
                    size={20}
                    className="text-dark-700 hover:text-dark-300 dark:text-dark-300 dark:hover:text-dark-700 transition-colors duration-300 cursor-pointer"
                    onClick={() => setTheme('light')}
                />
            ) : (
                <IoMdMoon
                    className="text-dark-700 hover:text-dark-300 dark:text-dark-300 dark:hover:text-dark-700 transition-colors duration-300 cursor-pointer"
                    onClick={() => setTheme('dark')}
                />
            )}
        </div>
    )
}
