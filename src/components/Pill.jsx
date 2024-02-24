import Link from 'next/link'
import React from 'react'

export const Pill = ({ children, url, externalUrl = false }) => {
    if (!externalUrl) {
        return (
            <Link
                href={url}
                className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-dark-700 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
            >
                {children}
            </Link>
        )
    }
    return (
        <a
            href={url}
            className="rounded-full text-dark-800 dark:text-dark-200 border border-dark-300 dark:border-dark-700 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100  dark:from-slate-800 dark:to-slate-950 hover:scale-105 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
