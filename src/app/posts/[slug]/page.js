import { getPostBySlug, getPosts } from '@/lib/mdx'
import { ArticleBody } from '@/components/ArticleBody'

export async function generateStaticParams() {
    const posts = getPosts()
    const paths = posts.map((post) => ({
        slug: post.replace(/\.mdx?$/, ''),
    }))

    return paths
}
export async function generateMetadata({ params }, parent) {
    const { slug } = params
    const { frontmatter } = await getPostBySlug(slug)
    const previousImages = (await parent).openGraph?.images || []

    return {
        metadataBase: new URL('https://cristianorrego.dev'),
        title: `Cristian Orrego Dev 👨‍💻 | ${frontmatter?.title}`,
        description: frontmatter.description,
        openGraph: {
            title: `Cristian Orrego Dev 👨‍💻 | ${frontmatter?.title}`,
            description: frontmatter.description,
            images: [frontmatter.cover, ...previousImages],
            author: 'cristianorregodev',
        },
    }
}

export default async function PostPage({ params }) {
    const { content, frontmatter } = await getPostBySlug(params.slug)
    return (
        <>
            {/* <Banner image={frontmatter?.cover} title={frontmatter?.title} /> */}
            <ArticleBody content={content} frontmatter={frontmatter} />
        </>
    )
}
