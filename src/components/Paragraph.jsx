import React from 'react'

export const Paragraph = ({ children, classes = '' }) => {
    return <p className={`text-dark-700 dark:text-dark-200 text-balance ${classes}`}>{children}</p>
}
