import Image from 'next/image'
import Link from 'next/link'
export const ProjectCard = ({ project }) => {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group max-w-sm lg:max-w-full min-h-full bg-dark-50  rounded-xl shadow-lg dark:bg-dark-900 dark:border-dark-700"
        >
            <div className="relative h-48 w-full overflow-hidden rounded-t-xl ">
                <span className="absolute top-2 right-2 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-lg z-10 text-sm font-semibold text-dark-100 ">
                    {project.category}
                </span>
                <Image
                    className=" group-hover:scale-[1.03]  transition-all duration-500 object-cover h-full"
                    src={project?.cover}
                    alt={project.title}
                    width={500}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-5">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-primary-600 dark:text-primary-400">
                    {project.title}
                </h5>
                <p className="mb-3 text-sm font-normal text-dark-700 dark:text-dark-200 line-clamp-3">
                    {project?.excerpt}
                </p>

                <ul className="flex gap-1 flex-wrap  text-dark-700 dark:text-dark-200 mb-2 text-sm">
                    {project?.stack.map((item, idx) => (
                        <li
                            key={idx}
                            className="rounded-xl border border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-dark-800 px-1 font-mono text-xs"
                        >
                            {' '}
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}
