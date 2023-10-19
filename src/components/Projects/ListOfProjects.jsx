import { ProjectCard } from '../ProjectCard'
import { PROJECTS } from '@/helpers/projects'

export const ListOfProjects = async () => {
    return PROJECTS.map((project) => <ProjectCard key={project.id} project={project} />)
}
