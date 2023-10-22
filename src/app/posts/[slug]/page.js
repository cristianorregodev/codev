import { getPostBySlug, getPosts } from '@/lib/mdx'
import { ArticleBody } from '@/components/ArticleBody'
import { Banner } from '@/components/Banner'

export async function generateMetadata({ params }) {
    const { slug } = params
    const { frontmatter } = await getPostBySlug(slug)
    return {
        title: `Cristian Orrego Dev 👨‍💻 | ${frontmatter?.title}`,
        description: frontmatter?.description,
        openGraph: {
            images: [frontmatter?.cover],
        },
    }
}
export async function generateStaticParams() {
    const posts = getPosts()
    const paths = posts.map((post) => ({
        slug: post.replace(/\.mdx?$/, ''),
    }))

    return paths
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
