import { getPostBySlug, getPosts } from '@/lib/mdx'
import { ArticleBody } from '@/components/ArticleBody'
import 'highlight.js/styles/atom-one-dark.css'

export async function generateStaticParams() {
    const posts = getPosts(process.env.ARTICLES_PATH)
    const paths = posts.map((post) => ({
        slug: post.replace(/\.mdx?$/, ''),
    }))

    return paths
}
export async function generateMetadata({ params }, parent) {
    const { slug } = params
    const { frontmatter } = await getPostBySlug(slug, process.env.ARTICLES_PATH)
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
    const { content, frontmatter } = await getPostBySlug(params.slug, process.env.ARTICLES_PATH)
    return (
        <>
            {/* <Banner image={frontmatter?.cover} title={frontmatter?.title} /> */}
            <ArticleBody content={content} frontmatter={frontmatter} />
        </>
    )
}
