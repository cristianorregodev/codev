import { getData } from '@/services/getData'
import { API_URL } from '@/config'
import { ArticleCard } from '../ArticleCard'

export const ListOfArticles = async () => {
    const { data } = await getData(`${API_URL}/posts`)
    return data.map((article) => <ArticleCard key={article.id} article={article} />)
}
