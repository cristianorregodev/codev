import { LocalDate } from '@/lib/local-date'
import Image from 'next/image'
import Link from 'next/link'

export const ArticleCard = ({ article }) => {
    return (
        <Link href={`/posts/${article.slug}`} className="w-full">
            <article className="grid grid-cols-[1fr,2fr] gap-3 p-2 items-center lg:grid-cols-1 md:p-4 bg-dark-50  hover:scale-[1.02] hover:bg-dark-100 dark:hover:bg-dark-950 rounded-lg shadow dark:bg-dark-900  transition-all duration-300">
                <header>
                    <Image
                        src={article?.cover}
                        alt={article?.title}
                        width={1000}
                        height={1000}
                        className="rounded-xl"
                    />
                </header>
                <section className=" text-dark-700 dark:text-dark-200 grid ">
                    <h1 className="text-primary-600 dark:text-primary-400 font-bold text-base tracking-tight mb-2 lg:text-lg">
                        {article.title}
                    </h1>
                    <p className="hidden lg:visible text-sm text-dark-700 dark:text-dark-200 lg:line-clamp-2 lg:text-lg ">
                        {article?.description}
                    </p>

                    <footer className="pt-2">
                        <span className="bg-dark-200 dark:bg-dark-700 rounded px-2 py-0.5 text-sm mr-2">
                            {new LocalDate().relativeTime(article?.date)}
                        </span>
                        <span className="bg-dark-200 dark:bg-dark-700 rounded px-2 py-0.5 text-dark-700 dark:text-dark-200 text-sm ">
                            {article.tags}
                        </span>
                    </footer>
                </section>
            </article>
        </Link>
    )
}
