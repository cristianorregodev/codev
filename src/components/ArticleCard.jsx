import { LocalDate } from '@/lib/local-date'
import Image from 'next/image'
import Link from 'next/link'
import { ShowDate } from './ShowDate'

export const ArticleCard = ({ article }) => {
    return (
        <Link href={`/posts/${article.slug}`} className="w-full">
            <article
                key={article.slug}
                className="mt-4 flex gap-x-6 px-4 py-6 rounded-xl shadow-lg items-center hover:scale-[1.02] transition-transform dark:shadow-dark-900"
            >
                <picture className=" w-1/4 rounded-lg overflow-hidden shadow-md ">
                    <img src={article?.cover} alt={article?.title} className="w-full object-cover" loading="lazy" />
                </picture>
                <section className="w-3/4">
                    <header>
                        <ShowDate date={article?.date} />
                        <h1 className="text-primary-700 dark:text-primary-400 font-bold text-lg">{article?.title}</h1>
                    </header>
                    <div>
                        <p className="hidden lg:visible lg:line-clamp-1 text-dark-700 dark:text-dark-200 ">
                            {article?.description}
                        </p>
                        <ul className="flex gap-x-6 mt-3">
                            <li className="rounded-full bg-dark-200 dark:bg-dark-700 text-sm px-2">{article?.tags}</li>
                            <li className="rounded-full bg-dark-200 dark:bg-dark-700 text-sm px-2">
                                {article?.author}
                            </li>
                        </ul>
                    </div>
                </section>
            </article>
        </Link>
    )
}
