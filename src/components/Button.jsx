import React from 'react'

export const Button = ({ children, primary = false, link = '#' }) => {
    if (primary)
        return (
            <a
                href={link}
                className="px-6 py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-primary-600 before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 bg-dark-800 rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-primary-500/50 ease duration-500"
            >
                {children}
            </a>
        )
    return (
        <a
            href={link}
            className="px-6 py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-dark-800 before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 bg-primary-600 rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-dark-500/50 ease duration-500"
        >
            {children}
        </a>
    )
}
