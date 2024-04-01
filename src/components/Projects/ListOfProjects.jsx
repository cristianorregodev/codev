import { ProjectCard } from '../ProjectCard'
import { PROJECTS } from '@/helpers/projects'

export const ListOfProjects = async ({ projects }) => {
    return projects
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1
            }
            if (a.date > b.date) {
                return -1
            }
            // a must be equal to b
            return 0
        })
        .map((project) => <ProjectCard key={project.id} project={project} />)
}
