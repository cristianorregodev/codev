'use client'
import Markdown from 'markdown-to-jsx'
import { useEffect } from 'react'
import Prism from 'prismjs'
import '@/helpers/prism.css'
import Image from 'next/image'
import { LocalDate } from '@/lib/local-date'

export const ArticleBody = ({ content, frontmatter }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    const timeReading = Math.ceil(content.split(' ').length / 200)
    return (
        <section className="container mx-auto px-2 lg:px-22 xl:px-28 2xl:max-w-[1200px] mt-10">
            <header className="mt-24 lg:mt-28 mb-8 lg:mb-12 max-w-[800px] mx-auto lg:grid lg:grid-cols-2 lg:gap-6">
                <Image
                    src={frontmatter?.cover}
                    alt={frontmatter?.title}
                    width={1000}
                    height={1000}
                    className="rounded-lg shadow-xl"
                />
                <section>
                    <h1 className="text-primary-600 dark:text-primary-400 font-bold text-3xl my-4">
                        {frontmatter?.title}
                    </h1>
                    <p className="text-dark-700 dark:text-dark-200">{frontmatter?.description}</p>
                    <ul className="flex gap-4 mt-4 text-dark-700 dark:text-dark-200">
                        <li className="flex gap-2 items-center text-sm px-2.5 py-0.5 bg-dark-200 dark:bg-dark-800 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </svg>
                            {frontmatter?.tags}
                        </li>
                        <li className="flex gap-2 items-center text-sm px-2.5 py-0.5 bg-dark-200 dark:bg-dark-800 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                />
                            </svg>
                            {new LocalDate().relativeTime(frontmatter?.date)}
                        </li>
                        <li className="flex gap-2 items-center text-sm px-2.5 py-0.5 bg-dark-200 dark:bg-dark-800 rounded">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {timeReading} min leyendo
                        </li>
                    </ul>
                </section>
            </header>
            <main id="article-body" className="max-w-[800px] mx-auto">
                <Markdown>{content}</Markdown>
            </main>
        </section>
    )
}
