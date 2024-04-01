import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const root = process.cwd()
export const getPosts = (sourcePath) => {
    return fs.readdirSync(path.join(root, sourcePath))
}

export const getPostBySlug = async (slug, sourcePath) => {
    const mdxSource = fs.readFileSync(path.join(root, sourcePath, `${slug}.mdx`), 'utf-8')
    const { data, content } = await matter(mdxSource)
    const source = await serialize(content)
    return {
        content,
        frontmatter: {
            slug,
            ...data,
        },
    }
}

export const getAllPostsMetadata = (sourcePath) => {
    const files = getPosts(sourcePath)

    return files.reduce((allPosts, postSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, sourcePath, postSlug), 'utf-8')

        const { data } = matter(mdxSource)
        return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
    }, [])
}
