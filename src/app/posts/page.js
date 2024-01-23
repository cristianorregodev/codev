import { Banner } from '@/components/Banner'
import { getAllPostsMetadata } from '@/lib/mdx'
import { ListOfPosts } from '@/components/Articles/ListOfPosts'

export const metadata = {
    title: 'Cristian Orrego Dev 👨‍💻 | Blog',
    description:
        'Blog de programación en español. Explora diferentes tecnologías, encuentra guías y trucos. Aprende desarrollo web y vuélvete experto en lo que tanto te gusta.',
    metadataBase: new URL('https://cristianorrego.dev'),
    author: 'cristianorregodev',
}
export default function PostsPage() {
    const posts = getAllPostsMetadata()

    return (
        <>
            <Banner title={'Blog de programación'} image={'/images/bloggin.png'} />
            <section className="pt-24 container mx-auto px-2 lg:w-[740px] ">
                <ListOfPosts posts={posts} />
            </section>
        </>
    )
}
