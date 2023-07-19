import { API_URL } from '@/config'
import { getData } from '@/services/getData'
import { ProjectCard } from '../ProjectCard'

export const ListOfProjects = async () => {
    const { data } = await getData(`${API_URL}/projects`)
    return data.map((project) => <ProjectCard key={project.id} project={project} />)
}
