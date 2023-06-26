'use client'
import { useRef } from 'react'
import { NavLink } from './NavLink'
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'

export const Navbar = () => {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle('hidden')
    }
    return (
        <header className="backdrop-blur-md bg-dark-200/30 dark:bg-dark-900/30 fixed w-full z-20 top-0 left-0">
            <nav className="container px-2 lg:px-20 flex flex-wrap items-center justify-between mx-auto py-4">
                <a
                    href="#"
                    className="self-center text-2xl font-bold whitespace-nowrap text-primary-500 dark:text-primary-400"
                >
                    codev
                </a>
                <div className="md:order-2">
                    <ul className="hidden md:flex md:space-x-8 ">
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                    <button
                        className="p-2 text-sm text-dark-700 dark:text-dark-200 rounded-lg md:hidden   "
                        onClick={showNavBar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    ref={navRef}
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 transition-all duration-500"
                >
                    <ul className="flex flex-col gap-6 p-4 md:p-0 mt-4 font-medium  md:flex-row  md:mt-0 md:border-0 ">
                        <li className="text-center">
                            <NavLink label={'Inicio'} />
                        </li>
                        <li className="text-center">
                            <NavLink label={'Experiencia'} />
                        </li>
                        <li className="text-center">
                            <NavLink label={'Proyectos'} />
                        </li>
                        <li className="text-center">
                            <NavLink label={'Artículos'} />
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-8 my-4 md:hidden">
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-dark-700 hover:text-dark-900 dark:text-dark-200 dark:hover:text-dark-50 transition-colors duration-300"
                            >
                                <FaYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
