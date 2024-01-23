'use client'
import { LocalDate } from '@/lib/local-date'

export const ShowDate = ({ date }) => {
    return <span className="text-xs text-crusta-700/90 dark:text-crusta-300">{new LocalDate().relativeTime(date)}</span>
}
