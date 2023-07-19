export const Footer = () => {
    return (
        <footer className="w-full mt-24 mb-8 ">
            <div className="rounded-lg border-dark-100 dark:border-dark-700 shadow dark:shadow-dark-700 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="https://flowbite.com/" className="hover:underline">
                        Codev
                    </a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Experiencia
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Artículos
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
