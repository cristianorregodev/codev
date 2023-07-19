import { ListOfArticles } from '@/components/Articles/ListOfArticles'
import { Banner } from '@/components/Banner'
export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | Blog de programación, noticias sobre tecnología, tutoriales, recursos web y código',
    description:
        'Descubre el fascinante mundo de la programación y las últimas noticias tecnológicas en nuestro blog. Encuentra tutoriales detallados, recursos web imprescindibles y código listo para implementar. Mantente al día con las tendencias y amplía tus conocimientos en el ámbito de la tecnología. ¡Explora, aprende y conviértete en un experto en programación y desarrollo web!',
}
export default function ArticlesPage() {
    return (
        <>
            <Banner title={'Artículos de blog'} image={'/banner-one.svg'} />
            <section className="container mx-auto px-2 lg:px-32">
                <ListOfArticles />
            </section>
        </>
    )
}
