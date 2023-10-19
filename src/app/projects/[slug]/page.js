import { ProjectBody } from '@/components/ProjectBody'
import { PROJECTS } from '@/helpers/projects'

export function generateMetadata({ params }) {
    const { slug } = params
    const project = PROJECTS.find((project) => project.slug === slug)
    return {
        metadataBase: new URL('https://cristianorrego.dev'),
        alternats: {
            canonical: `/projects`,
        },
        title: `Cristian Orrego Dev 👨‍💻 | ${project.title}`,
        description: project?.content?.abstract,
        openGraph: {
            images: [project?.content?.images?.cover],
        },
    }
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
