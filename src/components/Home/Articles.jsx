import { getData } from '@/services/getData'
import { ArticleCard } from '../ArticleCard'
import { SectionTitle } from '../SectionTitle'
import { API_URL } from '@/config'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const Articles = async () => {
    const { data } = await getData(`${API_URL}/posts`)
    const articles = data.slice(0, 6)
    return (
        <section className="container mx-auto px-2 pt-20 lg:px-52" id="articles-section">
            <SectionTitle>Artículos</SectionTitle>
            <div className="mt-6 grid gap-6 place-items-center md:grid-cols-2">
                {articles.map((item) => (
                    <ArticleCard key={item.id} article={item} />
                ))}
            </div>
            <div className="flex justify-center w-full mt-8">
                <Link
                    className="flex justify-center items-center gap-2 text-dark-800 font-bold dark:text-dark-200 relative overflow-hidden z-10   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-dark-900 dark:before:bg-dark-50 before:rounded-lg   before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300  hover:text-dark-900  dark:hover:text-dark-50"
                    href="/projects"
                >
                    Más artículos <AiOutlineArrowRight />
                </Link>
            </div>
        </section>
    )
}
