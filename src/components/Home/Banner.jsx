import { Pill } from '../Pill'
import ArticleIcon from '../icons/Article'
import CodeIcon from '../icons/Code'
import EmailIcon from '../icons/Email'
import GitHubIcon from '../icons/GitHub'
import LinkedInIcon from '../icons/LinkedIn'
export const Banner = () => {
    return (
        <section className="relative mx-auto container px-2 pt-44 lg:h-screen overflow-hidden lg:pt-0 lg:w-[740px] lg:flex lg:flex-col lg:justify-center">
            <div className="text-left lg:flex lg:flex-row-reverse lg:justify-center lg:items-center md:gap-x-4">
                <div className="Hero-image flex justify-center mb-6 w-16 lg:w-1/5 ">
                    <img
                        src="/images/profile.svg"
                        alt=""
                        className="drop-shadow-lg w-full rounded-full  object-contain shadow-lg dark:shadow-dark-800"
                        loading="lazy"
                    />
                </div>
                <header className="lg:w-4/5">
                    <h1 className="text-3xl font-bold lg:text-5xl  text-dark-700 dark:text-dark-200">
                        Hola, <span className=" text-primary-600 dark:text-primary-400">soy Cristian</span>
                    </h1>
                    <span className=" font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
                        Desarrollador Fullstack
                    </span>
                    <h2 className="lg:text-xl mt-6 md:mt-10 text-dark-700 dark:text-dark-200 text-pretty">
                        +3 años de experiencia.{' '}
                        <span className="text-crusta-800 dark:text-crusta-300 ">
                            Ingeniero de Sistemas y Desarrollador Web
                        </span>
                        .{' '}
                        <span className=" text-daintree-700 dark:text-daintree-200 ">
                            Especializado en crear soluciones web robustas
                        </span>
                        . Enseño programación a estudiantes de último grado de bachiller.
                    </h2>
                </header>
            </div>
            <ul className="mt-10 flex flex-wrap gap-4 justify-start ">
                <li>
                    <Pill url={'https://www.linkedin.com/in/cristianorregod/'} externalUrl={true}>
                        <LinkedInIcon className="size-4 md:size-6" /> LinkedIn
                    </Pill>
                </li>
                <li>
                    <Pill url={'https://github.com/cristianorregodev'} externalUrl={true}>
                        <GitHubIcon className="size-4 md:size-6" /> GitHub
                    </Pill>
                </li>
                <li>
                    <Pill url={'mailto:cristian.duquew@gmail.com'} externalUrl={true}>
                        <EmailIcon className="size-4 md:size-6" /> cristian.duquew@gmail.com
                    </Pill>
                </li>
                {/* <li>
                    <Pill url={'#projects'}>
                        <CodeIcon className="size-4 md:size-6" /> Proyectos
                    </Pill>
                </li> */}
                {/* <li>
                    <Pill url={'#articles'}>
                        <ArticleIcon className="size-4 md:size-6" /> Artículos
                    </Pill>
                </li> */}
            </ul>
            <div className="absolute hidden md:flex bottom-4 w-full justify-center">
                <a
                    href="#experience"
                    className="md:flex gap-2 animate-bounce text-primary-500 dark:text-primary-400 font-bold"
                >
                    Experiencia{' '}
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
                </a>
            </div>
        </section>
    )
}
