'use client'
import React, { useState } from 'react'
import { PROJECTS_CATEGORIES } from '@/helpers/staticData'

export const ProjectsFilter = ({ filterAction }) => {
    const [query, setQuery] = useState('')
    const handleQueryChange = (value) => {
        setQuery(value)
        filterAction(value)
    }
    const handleSelectChange = (e) => {
        setQuery(e.target.value)

        filterAction(e.target.value)
    }
    return (
        <>
            <div className="sm:hidden mb-8">
                <select
                    id="tabs"
                    className="bg-dark-50 border border-gray-300 text-dark-700 text-sm rounded-lg  block w-full p-2.5 dark:bg-dark-700 dark:border-gray-600 dark:placeholder-dark-400 dark:text-dark-200 "
                    onChange={handleSelectChange}
                >
                    <option value={''}>Escoge una categoría</option>
                    <option value={'Backend'}>Backend</option>
                    <option value={'Frontend'}>Frontend</option>
                    <option value={'Fullstack'}>Fullstack</option>
                    <option value={''}>Todos</option>
                </select>
            </div>
            <ul className="hidden my-16 text-sm font-medium text-center text-dark-700 rounded-lg shadow sm:flex dark:divide-dark-700 dark:text-dark-200 lg:w-[900px] mx-auto">
                <li className="w-full focus-within:z-10">
                    <button
                        className={`inline-block w-full p-4  border-r border-dark-200 dark:border-dark-700 rounded-s-lg  ${
                            query === PROJECTS_CATEGORIES.backend
                                ? 'bg-dark-200 dark:bg-dark-700 '
                                : 'bg-dark-50 dark:bg-dark-800'
                        }   dark:text-dark-200 hover:bg-dark-200 dark:hover:bg-dark-700`}
                        aria-current="page"
                        onClick={() => handleQueryChange('Backend')}
                    >
                        Backend
                    </button>
                </li>
                <li className="w-full focus-within:z-10">
                    <button
                        className={`inline-block w-full p-4  border-r border-gray-200 dark:border-dark-700 ${
                            query === PROJECTS_CATEGORIES.frontend
                                ? 'bg-dark-200 dark:bg-dark-700 '
                                : 'bg-dark-50 dark:bg-dark-800'
                        } hover:bg-dark-200  dark:hover:text-white dark:hover:bg-dark-700`}
                        onClick={() => handleQueryChange('Frontend')}
                    >
                        Frontend
                    </button>
                </li>
                <li className="w-full focus-within:z-10">
                    <button
                        className={`inline-block w-full p-4 border-r border-gray-200 dark:border-dark-700 ${
                            query === PROJECTS_CATEGORIES.fullstack
                                ? 'bg-dark-200 dark:bg-dark-700 '
                                : 'bg-dark-50 dark:bg-dark-800'
                        }  hover:bg-dark-200  dark:hover:text-white  dark:hover:bg-dark-700`}
                        onClick={() => handleQueryChange('Fullstack')}
                    >
                        Fullstack
                    </button>
                </li>
                <li className="w-full focus-within:z-10">
                    <button
                        className={`inline-block w-full p-4  border-s-0 border-gray-200 dark:border-dark-700 ${
                            query === '' ? 'bg-dark-200 dark:bg-dark-700 ' : 'bg-dark-50 dark:bg-dark-800'
                        } rounded-e-lg  hover:bg-dark-200   dark:hover:text-white dark:hover:bg-dark-700`}
                        onClick={() => handleQueryChange('')}
                    >
                        Todos
                    </button>
                </li>
            </ul>
        </>
    )
}
