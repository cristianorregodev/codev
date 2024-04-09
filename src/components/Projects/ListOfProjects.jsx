'use client'
import { useState } from 'react'
import { ProjectCard } from '../ProjectCard'
import { ProjectsFilter } from '../ProjectsFilter'
import { filterByAttribute } from '@/lib/filters'

export const ListOfProjects = ({ projects }) => {
    const [filter, setFilter] = useState(projects)
    const handleFilter = (query) => {
        const filtered = filterByAttribute({ data: projects, value: query })
        setFilter(filtered)
    }
    const sorted = filter.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        if (a.date > b.date) {
            return -1
        }
        // a must be equal to b
        return 0
    })

    return (
        <>
            <ProjectsFilter filterAction={handleFilter} />
            {sorted.length === 0 && <p className="text-center">Proximamente...👨‍💻</p>}
            <section className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {sorted.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </section>
        </>
    )
}
