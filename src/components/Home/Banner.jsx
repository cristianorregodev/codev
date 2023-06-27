import { Button } from '../Button'
import Image from 'next/image'
export const Banner = () => {
    return (
        <section className="relative mx-auto container px-2 pt-20 h-screen overflow-hidden grid place-items-center md:grid-cols-2 md:pt-0 lg:px-20">
            <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold lg:text-5xl xl:text-6xl text-primary-500 dark:text-primary-400">
                    Cristian Orrego Dev
                </h1>
                <h2 className="text-lg font-semibold lg:text-xl xl:text-2xl text-dark-700 dark:text-dark-200">
                    Fullstack Developer
                </h2>
                <p className="lg:text-lg mt-4 text-dark-700 dark:text-dark-200">
                    Bienvenido a mi sitio web, donde podrás echar un vistazo a mi trabajo, experiencia en desarrollo web
                    y algunos artículos sobre programación.
                </p>
                <div className="mt-8 flex gap-6 justify-center md:justify-start">
                    <Button primary={true}>Proyectos</Button>
                    <Button>Artículos</Button>
                </div>
            </div>
            <div className="Hero-image flex justify-center">
                <Image
                    src={'/images/picture.png'}
                    width={450}
                    height={450}
                    alt="Person"
                    className="drop-shadow-lg saturate-150"
                />
            </div>
            <button className="absolute hidden md:flex gap-2 justify-center bottom-4 animate-bounce text-primary-500 dark:text-primary-400 font-bold">
                scroll{' '}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                </svg>
            </button>
        </section>
    )
}
