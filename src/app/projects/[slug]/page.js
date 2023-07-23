import { Banner } from '@/components/Banner'
import { ProjectBody } from '@/components/ProjectBody'
import { API_URL, BASE_API_URL } from '@/config'
import { getData } from '@/services/getData'
export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | Portafolio',
    description:
        'Explora mí portafolio web y descubre mis proyectos más destacados. Desde aplicaciones interactivas hasta sitios web de última generación, este portafolio te brinda una visión única de mi habilidad y creatividad.',
}
export default async function ProjectPage({ params }) {
    const { slug } = params
    const { data } = await getData(`${API_URL}/projects/${slug}`)
    return (
        <>
            <Banner title={data.title} image={`${BASE_API_URL}${data.cover}`} />
            <ProjectBody data={data} />
        </>
    )
}
