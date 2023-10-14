import Image from 'next/image'
import { BASE_API_URL } from '@/config'
import Link from 'next/link'
export const ProjectCard = ({ project }) => {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group max-w-sm lg:max-w-full min-h-fit bg-dark-50 border border-dark-100 rounded-lg shadow dark:bg-dark-900 dark:border-dark-700"
        >
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg ">
                <span className="absolute top-2 right-2 backdrop-blur-md bg-dark-600/50 py-1 px-2 rounded-lg z-10 text-sm font-semibold text-dark-100 ">
                    {project.category}
                </span>
                <Image
                    className=" group-hover:scale-[1.03]  transition-all duration-500 object-cover h-full"
                    src={project?.content?.images?.mockup}
                    alt={project.title}
                    width={500}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
                    {project.title}
                </h5>
                <p className="mb-3 font-normal text-dark-700 dark:text-dark-200 line-clamp-3">
                    {project?.content?.description}
                </p>

                <h6 className="text-lg font-bold text-primary-600 dark:text-primary-400">Stack</h6>
                <ul className="flex gap-1 flex-wrap  text-dark-700 dark:text-dark-200 mb-2 text-sm">
                    {project?.content?.technologies.map((item, idx) => (
                        <li key={idx}>&middot; {item.name}</li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}
