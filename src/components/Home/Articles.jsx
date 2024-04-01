import { ArticleCard } from '../ArticleCard'
import { SectionTitle } from '../SectionTitle'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Container } from '../Container'
import { getAllPostsMetadata } from '@/lib/mdx'
import { ShowDate } from '../ShowDate'

export const Articles = async () => {
    const posts = getAllPostsMetadata(process.env.ARTICLES_PATH)
    const articles = posts
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1
            }
            if (a.date > b.date) {
                return -1
            }
            // a must be equal to b
            return 0
        })
        .slice(0, 3)
    return (
        <Container id="articles">
            <SectionTitle>Artículos</SectionTitle>

            {articles.map((item) => (
                <ArticleCard key={item.slug} article={item} />
            ))}
            <div className="flex justify-center w-full mt-8">
                <Link
                    className="flex justify-center items-center gap-2 text-dark-800 font-bold dark:text-dark-200 relative overflow-hidden z-10   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-dark-900 dark:before:bg-dark-50 before:rounded-lg   before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300  hover:text-dark-900  dark:hover:text-dark-50"
                    href="/posts"
                >
                    Más artículos <AiOutlineArrowRight />
                </Link>
            </div>
        </Container>
    )
}
