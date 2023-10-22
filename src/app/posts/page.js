import { Banner } from '@/components/Banner'
import { getAllPostsMetadata } from '@/lib/mdx'
import { ListOfPosts } from '@/components/Articles/ListOfPosts'

export const metadata = {
    title: 'Cristian Orrego Dev 👨‍💻 | Blog',
    description:
        'Blog de programación en español. Explora diferentes tecnologías, encuentra guías y trucos. Aprende desarrollo web y vuélvete experto en lo que tanto te gusta.',
}
export default function PostsPage() {
    const posts = getAllPostsMetadata()

    return (
        <>
            <Banner title={'Blog de programación'} image={'/images/bloggin.png'} />
            <section className="mt-16 container mx-auto px-2 lg:px-22 xl:px-28 2xl:px-52 grid lg:grid-cols-3 gap-6 ">
                <ListOfPosts posts={posts} />
            </section>
        </>
    )
}
