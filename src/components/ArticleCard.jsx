export const ArticleCard = ({ article }) => {
    return (
        <a href="#" className="w-full">
            <article className="p-2 md:p-4 bg-dark-50 border hover:bg-dark-100 dark:hover:bg-dark-950 border-dark-100 rounded-lg shadow dark:bg-dark-900 dark:border-dark-700 transition-colors duration-300">
                <div className="flex justify-between text-dark-700 dark:text-dark-200">
                    <span className="text-sm">
                        {new Date(article.date).toLocaleDateString('es-co', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                        })}
                    </span>
                    <span className="bg-dark-700 dark:bg-dark-300 rounded-lg px-2 text-dark-200 dark:text-dark-700 text-sm font-semibold">
                        {article.category}
                    </span>
                </div>
                <h1 className="text-primary-600 dark:text-primary-400 font-semibold text-lg tracking-tight">
                    {article.title}
                </h1>
                <ul className="flex flex-wrap gap-x-2 text-dark-700 dark:text-dark-300 text-sm">
                    {article.tags.map((tag) => (
                        <li key={tag.id} className="italic">
                            #{tag.name}
                        </li>
                    ))}
                </ul>
            </article>
        </a>
    )
}
