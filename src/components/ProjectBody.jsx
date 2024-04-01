'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { BASE_API_URL } from '@/config'
import { FaGithub } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import hljs from 'highlight.js'

export const ProjectBody = ({ content, frontmatter }) => {
    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <section className="container mx-auto px-2 lg:px-22 xl:px-28 2xl:max-w-[1200px] mt-10">
            <header className="mt-24 lg:mt-28 mb-8 lg:mb-12 max-w-[800px] mx-auto lg:flex lg:items-center lg:gap-6">
                <img
                    src={frontmatter?.cover}
                    alt={frontmatter.title}
                    className="rounded-lg h-auto w-full lg:w-1/3"
                    sizes="(max-width: 768px) 600px, (max-width: 1200px) 800px, 960px"
                />
                <div>
                    <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400 my-4 lg:my-0 lg:mb-4">
                        {frontmatter.title}
                    </h1>
                    <ul className="list-none md:flex md:gap-8 mb-4 items-start">
                        <li className="flex gap-1 items-start text-dark-700 dark:text-dark-200 text-sm min-w-fit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-primary-600 dark:text-primary-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                />
                            </svg>
                            {frontmatter.date}
                        </li>
                        <li className="flex gap-1 items-center text-dark-700 dark:text-dark-200 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-primary-600 dark:text-primary-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                            </svg>
                            {frontmatter.category}
                        </li>
                        <li className="flex gap-1  text-dark-700 dark:text-dark-200 text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-primary-600 dark:text-primary-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                                />
                            </svg>

                            <p className="flex gap-1 flex-wrap">
                                {frontmatter?.stack.map((item, idx) => (
                                    <span key={idx}>{item + ','}</span>
                                ))}
                            </p>
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        {frontmatter?.link && (
                            <a
                                href={frontmatter?.link}
                                target="_blank"
                                className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-bold hover:underline transition-all duration-200"
                            >
                                Ir al sitio{' '}
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
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </a>
                        )}
                        {frontmatter?.repo && (
                            <a
                                href={frontmatter?.repo}
                                target="_blank"
                                className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-bold hover:underline transition-all duration-200"
                            >
                                Repo{' '}
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
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <main id="article-body" className="max-w-[800px] mx-auto">
                <blockquote className="text-dark-700 dark:text-dark-200 bg-dark-100 dark:bg-dark-900 py-4 rounded-md shadow-md text-pretty pr-4 mb-12">
                    {frontmatter?.excerpt}
                </blockquote>
                <Markdown>{content}</Markdown>
            </main>
        </section>
    )
}
