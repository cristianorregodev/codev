'use client'
import { useEffect } from 'react'
import Prism from 'prismjs'
import '@/helpers/prism.css'
import Image from 'next/image'
import { BASE_API_URL } from '@/config'

export const ArticleBody = ({ data }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <section className="container mx-auto px-2 lg:px-22 xl:px-28 2xl:px-52 mt-10">
            <ul className="list-none grid md:grid-cols-4 mb-12">
                <li className="flex gap-1 text-dark-700 dark:text-dark-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-600 dark:text-primary-400 "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                    Cristian Orrego Dev
                </li>
                <li className="flex gap-1 text-dark-700 dark:text-dark-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                    </svg>
                    {new Date(data.date).toLocaleDateString('es-co', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                    })}
                </li>
                <li className="flex gap-1 text-dark-700 dark:text-dark-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    {data.category}
                </li>
                <li className="flex gap-1 text-dark-700 dark:text-dark-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-600 dark:text-primary-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                    </svg>

                    <ul className="flex gap-1 flex-wrap">
                        {data.tags.map((item, idx) => (
                            <li key={idx}>&middot; {item.name}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            <div id="article-body">
                <div className="" dangerouslySetInnerHTML={{ __html: data.abstract }}></div>
                <div className="" dangerouslySetInnerHTML={{ __html: data.main_content }}></div>
                <div className="rounded-lg overflow-hidden my-6">
                    <Image
                        src={BASE_API_URL + data.image}
                        alt={data.title}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="" dangerouslySetInnerHTML={{ __html: data.second_content }}></div>
            </div>
        </section>
    )
}
