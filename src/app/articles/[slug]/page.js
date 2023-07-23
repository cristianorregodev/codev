import { ArticleBody } from '@/components/ArticleBody'
import { Banner } from '@/components/Banner'
import { API_URL, BASE_API_URL } from '@/config'
import { getData } from '@/services/getData'
export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | Blog de programación, noticias sobre tecnología, tutoriales, recursos web y código',
    description:
        'Descubre el fascinante mundo de la programación y las últimas noticias tecnológicas en nuestro blog. Encuentra tutoriales detallados, recursos web imprescindibles y código listo para implementar. Mantente al día con las tendencias y amplía tus conocimientos en el ámbito de la tecnología. ¡Explora, aprende y conviértete en un experto en programación y desarrollo web!',
}
export default async function ArticlePage({ params }) {
    const { slug } = params
    const { data } = await getData(`${API_URL}/posts/${slug}`)
    return (
        <>
            <Banner title={data.title} image={BASE_API_URL + data.cover} />
            <ArticleBody data={data} />
        </>
    )
}
