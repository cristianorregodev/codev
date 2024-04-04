import React from 'react'
import { Paragraph } from '@/components/Paragraph'
import ExternalLinkIcon from '@/components/icons/ExternalLink'

export const ServiceItem = ({ service }) => {
    return (
        <article
            id={service?.id}
            className={`container py-24 mx-auto px-2 lg:w-[1114px] lg:px-0 md:flex md:gap-8 md:items-center ${
                service?.reverse && 'md:flex-row-reverse'
            }`}
        >
            <section>
                <h2
                    className={`uppercase text-sm ${
                        service?.reverse
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-crusta-700 dark:text-crusta-400'
                    } `}
                >
                    {service?.subtitle}
                </h2>
                <h1 className="capitalize text-xl md:text-4xl font-bold">
                    {service?.title?.text}{' '}
                    <span
                        className={`${
                            service?.reverse
                                ? 'text-primary-600 dark:text-primary-400'
                                : 'text-crusta-700 dark:text-crusta-400'
                        }`}
                    >
                        {service?.title?.span}
                    </span>{' '}
                </h1>
                <Paragraph classes="text-pretty my-8">{service?.description}</Paragraph>
                <ul className="service-list">
                    {service?.benefits.map((benefit, key) => (
                        <li key={benefit + key}>
                            <Paragraph classes="text-pretty">{benefit}</Paragraph>
                        </li>
                    ))}
                </ul>
            </section>
            <aside className="min-w-fit mt-8 md:mt-0">
                <h4
                    className={` mb-4 font-bold text-lg md:text-2xl ${
                        service?.reverse
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-crusta-700 dark:text-crusta-400'
                    }`}
                >
                    Proyectos
                </h4>
                <div className="grid grid-cols-2 gap-4  place-content-center mb-8">
                    {service?.projects.map((project) => (
                        <a
                            href={project?.url}
                            key={project.title}
                            className="relative group hover:bg-dark-950 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                            target="_blank"
                        >
                            <img
                                src={project?.image}
                                key={project.title}
                                alt={project.title}
                                width={240}
                                height={210}
                                loading="lazy"
                                className=" rounded-lg object-cover group-hover:opacity-50  transition-all"
                            />
                            <span className="absolute m-auto top-4 right-4   text-sm font-bold hidden group-hover:flex transition-all items-center gap-2 text-white">
                                {project?.title} <ExternalLinkIcon className="size-4" />
                            </span>
                        </a>
                    ))}
                </div>
                <a
                    href={service?.button.url}
                    className={`flex justify-center items-center gap-2 px-6 py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full ${
                        service?.reverse ? 'before:bg-crusta-600' : 'before:bg-primary-600'
                    }  before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 ${
                        service?.reverse ? 'bg-primary-600' : 'bg-crusta-600'
                    }  rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-primary-500/50 ease duration-500 max-w-56 mx-auto`}
                >
                    {service?.button.text}
                </a>
            </aside>
        </article>
    )
}
