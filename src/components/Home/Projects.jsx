import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { SectionTitle } from '../SectionTitle'
import { ProjectCard } from '../ProjectCard'
import { Container } from '../Container'
import { PROJECTS } from '@/helpers/projects'

const sorted = PROJECTS.sort((a, b) => {
    if (a.date < b.date) {
        return 1
    }
    if (a.date > b.date) {
        return -1
    }
    // a must be equal to b
    return 0
}).slice(0, 3)
export const Projects = async () => {
    return (
        <Container id="projects">
            <SectionTitle>Proyectos</SectionTitle>
            <p className="mt-6 text-dark-700 dark:text-dark-200">
                Mis proyectos más emocionantes y creativos. Cada proyecto es el resultado de mi dedicación y pasión por
                la programación, y estoy encantado de compartirlos contigo. Descubre cómo transformo ideas en realidades
                digitales. ¡Explora, inspira y crea con mis proyectos de software!
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
                <Link
                    href={`/projects/${sorted[0].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden">
                        <img
                            className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[0].content.images.cover}
                            alt={sorted[0].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">{sorted[0].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[0].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[0]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[0].category}
                    </span>
                </Link>
                <Link
                    href={`/projects/${sorted[1].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden">
                        <img
                            className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[1].content.images.cover}
                            alt={sorted[1].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">{sorted[1].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[1].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[1]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[1].category}
                    </span>
                </Link>

                <Link
                    href={`/projects/${sorted[2].slug}`}
                    className="relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-4 md:flex md:flex-row-reverse md:items-center p-1 group overflow-hidden"
                >
                    <figure className="w-full rounded-3xl overflow-hidden md:w-1/2 md:h-full">
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                            src={sorted[2].content.images.cover}
                            alt={sorted[2].title}
                            loading="lazy"
                        />
                    </figure>
                    <div className="p-6 md:w-1/2">
                        <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">{sorted[2].title}</h1>
                        <p className="line-clamp-3 mt-4 text-dark-700 dark:text-dark-200">
                            {sorted[2].content.description}
                        </p>
                        <ul className="flex gap-1 flex-wrap text-sm mt-4">
                            {sorted[2]?.content?.technologies.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                                >
                                    {' '}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span className="absolute top-4 left-4 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-full z-10 text-sm font-semibold text-dark-100 ">
                        {sorted[2].category}
                    </span>
                </Link>
            </div>
            <div className="flex justify-center w-full mt-8">
                <Link
                    className="flex justify-center items-center gap-2 text-dark-800 font-bold dark:text-dark-200 relative overflow-hidden z-10   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-dark-900 dark:before:bg-dark-50 before:rounded-lg   before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300  hover:text-dark-900  dark:hover:text-dark-50"
                    href="/projects"
                >
                    Más proyectos <AiOutlineArrowRight />
                </Link>
            </div>
        </Container>
    )
}
