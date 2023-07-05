import { getData } from '@/services/getData'
import { ArticleCard } from '../ArticleCard'
import { SectionTitle } from '../SectionTitle'
import { API_URL } from '@/config'

export const Articles = async () => {
    const { data } = await getData(`${API_URL}/posts`)
    const articles = data.slice(0, 6)
    return (
        <section className="container mx-auto px-2 pt-20 lg:px-32">
            <SectionTitle>Artículos</SectionTitle>
            <div className="mt-6 grid gap-6 place-items-center md:grid-cols-2">
                {articles.map((item) => (
                    <ArticleCard key={item.id} article={item} />
                ))}
            </div>
        </section>
    )
}
