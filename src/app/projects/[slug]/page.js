import { Banner } from '@/components/Banner'
import { ProjectBody } from '@/components/ProjectBody'
import { API_URL, BASE_API_URL } from '@/config'
import { PROJECTS } from '@/helpers/projects'
import { getData } from '@/services/getData'
export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | Portafolio',
    description:
        'Explora mí portafolio web y descubre mis proyectos más destacados. Desde aplicaciones interactivas hasta sitios web de última generación, este portafolio te brinda una visión única de mi habilidad y creatividad.',
}
export default async function ProjectPage({ params }) {
    const { slug } = params
    const data = PROJECTS.find((project) => project.slug === slug)
    return (
        <>
            <ProjectBody data={data} />
        </>
    )
}
