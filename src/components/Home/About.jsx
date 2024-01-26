import { AiOutlineFileProtect } from 'react-icons/ai'
import { Container } from '../Container'
import { SectionTitle } from '../SectionTitle'
import Link from 'next/link'

export const About = () => {
    return (
        <Container id="sobre-mi">
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="pt-12 md:pt-2">
                <div className="w-full">
                    <img
                        src="/images/cristian_orrego.webp"
                        alt="Programador mirando a la cámara con escritorio atrás"
                        className=" object-cover rounded-full size-72 shadow-lg shadow-dark-900/20 dark:shadow-dark-50/10  mx-auto"
                        loading="lazy"
                    />

                    <p className="mt-8 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Hola 👋, soy Cristian Orrego,{' '}
                        <span className="font-bold text-primary-700 dark:text-primary-400">Ingeniero en Sistemas</span>{' '}
                        y{' '}
                        <span className="font-bold text-primary-700 dark:text-primary-400">
                            Desarrollador FullStack.
                        </span>{' '}
                        Inicié en la programación como un hobby hace poco más de 4 años. Hoy estoy{' '}
                        <span className=" text-crusta-800 dark:text-crusta-300 font-bold">
                            liderando un equipo de desarrollo en una empresa con mercado internacional.
                        </span>{' '}
                    </p>
                    <p className="mt-4 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Entre mis logros destaco el{' '}
                        <span className="text-crusta-800 dark:text-crusta-300 font-bold">
                            desarrollo e implementación de estándares de código y metodologías de desarrollo en{' '}
                            <a
                                href="https://colraices.com"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="underline"
                            >
                                Colraices
                            </a>
                        </span>{' '}
                        , logrando así garantizar la calidad del código y un flujo de trabajo efectivo en el equipo.
                    </p>
                    <p className="mt-4 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Como proyecto personal comparto{' '}
                        <Link href={'/posts'} className="text-crusta-800 dark:text-crusta-300 font-bold underline">
                            artículos de blog sobre programación
                        </Link>
                        . Cuando compartes tu conocimiento es cuando más aprendes y mi objetivo además de seguir
                        mejorando mis habilidades es ayudar a otros con mis experiencias, guías y tutoriales.
                    </p>
                    <p className="mt-4 text-dark-700 dark:text-dark-200 md:w-11/12 text-pretty text-base">
                        Por último, comparto mi hoja de vida actualizada, donde de manera más detallada específico mi
                        experiencia laboral, logros y formación académica.
                    </p>
                </div>
            </div>
            <div className="flex justify-center w-full mt-8">
                <a
                    className="flex items-center gap-2 px-6 py-2 font-bold relative z-10 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-primary-600 before:-z-10 before:transition-all before:duration-300 before:hover:w-full text-dark-100 bg-dark-800 rounded-full hover:bg-dark-600 hover:shadow-md hover:shadow-primary-500/50 ease duration-500"
                    href="https://docs.google.com/document/d/1qroZkOm9Bxvuf5LKPC12N-yTHao0oP0hR7HS_8qyZas/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Curriculum <AiOutlineFileProtect />
                </a>
            </div>
        </Container>
    )
}
