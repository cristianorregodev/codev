'use client'
import { LocalDate } from '@/lib/local-date'

export const ShowDate = ({ date }) => {
    return (
        <span className="bg-dark-200 dark:bg-dark-700 rounded px-2 py-0.5 text-sm mr-2">
            {new LocalDate().relativeTime(date)}
        </span>
    )
}
