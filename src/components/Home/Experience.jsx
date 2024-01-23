import { experienceInfo } from '@/helpers/staticData'
import { Container } from '../Container'
import { SectionTitle } from '../SectionTitle'

export const Experience = () => {
    return (
        <Container id="experience">
            <SectionTitle>Experiencia</SectionTitle>
            <article className="container px-2 mt-10">
                <ul className="relative border-l border-dark-400 dark:border-dark-700">
                    {experienceInfo.map((experience) => (
                        <li key={experience.date} className="mb-8 md:mb-6 ml-6 ">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-dark-600 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-primary-100 dark:text-primary-100"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                            <h3 className="flex items-center gap-2 mb-1 text-lg font-semibold text-primary-700 dark:text-primary-400">
                                {experience.role} <span class="text-white font-normal">-</span>
                                <span className="text-base text-crusta-700/90 dark:text-crusta-300/90">
                                    {experience.company}
                                </span>
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-primary-950/80 dark:text-primary-200/90">
                                {experience.date}
                            </time>
                            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
                                {experience.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </article>
        </Container>
    )
}
