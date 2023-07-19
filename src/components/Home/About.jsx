import Image from 'next/image'
import { AiOutlineFileProtect } from 'react-icons/ai'

export const About = () => {
    return (
        <section className="container mx-auto px-2 pt-20 lg:px-32" id="experience">
            <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">Sobre mí</h2>
            <div className="md:grid md:grid-cols-2 md:place-items-center pt-12 md:pt-2">
                <div className="md:w-full">
                    <Image
                        src={'/images/cristian_orrego.webp'}
                        width={500}
                        height={500}
                        alt={'Programador de frente con espacio de trabajo de fondo'}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=" md:w-11/12 rounded-xl shadow-lg shadow-dark-900/20 dark:shadow-dark-50/10"
                    />
                    <p className="mt-8 text-dark-700 dark:text-dark-200 md:w-11/12">
                        Hola 👋, soy profesional en{' '}
                        <span className="font-bold text-primary-600 dark:text-primary-400">Ingeniería en Sistemas</span>{' '}
                        y{' '}
                        <span className="font-bold text-primary-600 dark:text-primary-400">
                            Desarrollador FullStack
                        </span>{' '}
                        con más de 3 años de experiencia en TI creando soluciones web desde páginas web informativas
                        hasta aplicaciones web para uso de empresas resolviendo problemas de rendimiento y ayudando en
                        el arduo proceso de digitalización. Echa un vistazo al timeline donde resumo mi experiencia y
                        encuentra al final mi curriculum actualizado.
                    </p>
                </div>
                <article className="container px-2 mt-10">
                    <ul className="relative border-l border-dark-400 dark:border-dark-700">
                        <li className="mb-8 md:mb-6 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-primary-900 dark:text-primary-300"
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-dark-700 dark:text-dark-200">
                                Programador FullStack{' '}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-dark-500 dark:text-dark-400">
                                Enero 2022 - Presente
                            </time>
                            <p className="mb-4 text-base font-normal text-dark-700 dark:text-dark-200">
                                Nuevo rol como desarrollador Full Stack, aportando ideas y soluciones en empresa del
                                sector financiero e inmobiliario mejorando procesos internos y la interacción con el
                                usuario final.
                            </p>
                        </li>
                        <li className="mb-8 md:mb-6 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-primary-900 dark:text-primary-300"
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-dark-700 dark:text-dark-200">
                                Web master{' '}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-dark-500 dark:text-dark-400">
                                Febrero 2020 - Noviembre 2021
                            </time>
                            <p className="mb-4 text-base font-normal text-dark-700 dark:text-dark-200">
                                Rediseño y mantenimiento de sitio y aplicación web en institución del sector educativo
                                donde además de estar bajo el rol de Web master, dí clases de programación y desarrollo
                                web.
                            </p>
                        </li>
                        <li className="mb-8 md:mb-6 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-primary-900 dark:text-primary-300"
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-dark-700 dark:text-dark-200">
                                Primer proyecto para producción{' '}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-dark-500 dark:text-dark-400">
                                Septiembre 2019
                            </time>
                            <p className="mb-4 text-base font-normal text-dark-700 dark:text-dark-200">
                                En mi proceso de formación como Ingeniero en Sistemas surge la posibildiad de mejorar la
                                presencia en internet de un centro educativo local desarrollando un sitio web
                                institucional informativo..
                            </p>
                        </li>
                        <li className="mb-8 md:mb-6 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-200 rounded-full -left-3 ring-8 ring-dark-50 dark:ring-dark-950 dark:bg-dark-600">
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-primary-900 dark:text-primary-300"
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
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-dark-700 dark:text-dark-200">
                                Aprendizaje autónomo{' '}
                            </h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-dark-500 dark:text-dark-400">
                                2018 - 2019
                            </time>
                            <p className="mb-4 text-base font-normal text-dark-700 dark:text-dark-200">
                                Primeros pasos en el desarrollo web aprendiendo en mis clases de ingeniería y de forma
                                autodidacta con cursos virtuales, donde creé algunos proyectos personales los cuáles me
                                abrieron las puertas al mundo laboral dentro de la insdustria TI.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
            <div className="flex justify-center w-full">
                <a
                    className="flex justify-center items-center gap-2 text-dark-800 font-bold dark:text-dark-200 relative overflow-hidden z-10   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-dark-900 dark:before:bg-dark-50 before:rounded-lg   before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300  hover:text-dark-900  dark:hover:text-dark-50"
                    href="https://docs.google.com/document/d/1qroZkOm9Bxvuf5LKPC12N-yTHao0oP0hR7HS_8qyZas/edit?usp=sharing"
                    target="_blank"
                >
                    Curriculum <AiOutlineFileProtect />
                </a>
            </div>
        </section>
    )
}
