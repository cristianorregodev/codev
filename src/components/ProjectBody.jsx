'use client'
import { useEffect } from 'react'
import Prism from 'prismjs'
import '@/helpers/prism.css'
import Image from 'next/image'
import { BASE_API_URL } from '@/config'

export const ProjectBody = ({ data }) => {
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

                    <a className="underline" href={data?.links?.url} target="_blank">
                        {data.client}
                    </a>
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
                    {data.created_at}
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
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                    </svg>

                    <ul className="flex gap-1">
                        {data.technologies.map((item, idx) => (
                            <li key={idx}>{item + ','}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            <div id="article-body">
                <div className="" dangerouslySetInnerHTML={{ __html: data.abstract }}></div>

                <div className="" dangerouslySetInnerHTML={{ __html: data.description }}></div>
                <div className="relative rounded-lg overflow-hidden my-6 ">
                    <Image
                        src={BASE_API_URL + data.image}
                        alt={data.title}
                        width={1400}
                        height={1400}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="" dangerouslySetInnerHTML={{ __html: data.conclusion }}></div>
            </div>
        </section>
    )
}
