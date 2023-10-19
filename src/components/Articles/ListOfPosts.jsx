import { ArticleCard } from '../ArticleCard'

export const ListOfPosts = async ({ posts }) => {
    return posts.map((post) => <ArticleCard key={post?.slug} article={post} />)
}
