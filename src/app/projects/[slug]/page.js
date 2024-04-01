import { ProjectBody } from '@/components/ProjectBody'
import { getPostBySlug, getPosts } from '@/lib/mdx'
import 'highlight.js/styles/atom-one-dark.css'

export async function generateStaticParams() {
    const projects = getPosts(process.env.PROJECTS_PATH)
    const paths = projects.map((project) => ({
        slug: project.replace(/\.mdx?$/, ''),
    }))

    return paths
}
export async function generateMetadata({ params }, parent) {
    const { slug } = params
    const { frontmatter } = await getPostBySlug(slug, process.env.PROJECTS_PATH)
    const previousImages = (await parent).openGraph?.images || []
    return {
        metadataBase: new URL('https://cristianorrego.dev'),
        title: `Cristian Orrego Dev 👨‍💻 | ${frontmatter.title}`,
        description: frontmatter?.excerpt,
        openGraph: {
            title: `Cristian Orrego Dev 👨‍💻 | ${frontmatter.title}`,
            description: frontmatter?.excerpt,
            images: [frontmatter?.cover, ...previousImages],
            author: 'cristianorregodev',
        },
    }
}
export default async function ProjectPage({ params }) {
    const { slug } = params
    const { content, frontmatter } = await getPostBySlug(slug, process.env.PROJECTS_PATH)

    return (
        <>
            <ProjectBody content={content} frontmatter={frontmatter} />
        </>
    )
}
