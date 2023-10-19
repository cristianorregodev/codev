import { Banner } from '@/components/Banner'
import { getAllPostsMetadata } from '@/lib/mdx'
import { ListOfPosts } from '@/components/Articles/ListOfPosts'

export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | Portafolio',
    description:
        'Explora mí portafolio web y descubre mis proyectos más destacados. Desde aplicaciones interactivas hasta sitios web de última generación, este portafolio te brinda una visión única de mi habilidad y creatividad.',
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
