import { AiOutlineArrowRight } from 'react-icons/ai'
import { getData } from '@/services/getData'
import { SectionTitle } from '../SectionTitle'
import { API_URL } from '@/config'
import { ProjectCard } from '../ProjectCard'
import Link from 'next/link'
import { Container } from '../Container'

export const Projects = async () => {
    const { data } = await getData(`${API_URL}/projects`)
    const projects = data.slice(0, 3)
    return (
        <Container id="projects-section">
            <SectionTitle>Proyectos</SectionTitle>
            <p className="mt-6 text-dark-700 dark:text-dark-200 text-justify">
                Mis proyectos más emocionantes y creativos. Cada proyecto es el resultado de mi dedicación y pasión por
                la programación, y estoy encantado de compartirlos contigo. Descubre cómo transformo ideas en realidades
                digitales. ¡Explora, inspira y crea con mis proyectos de software!
            </p>
            <div className="mt-8 grid gap-4 place-items-center md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="flex justify-center w-full mt-8">
                <Link
                    className="flex justify-center items-center gap-2 text-dark-800 font-bold dark:text-dark-200 relative overflow-hidden z-10   before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-dark-900 dark:before:bg-dark-50 before:rounded-lg   before:-z-10 before:transition-all before:duration-500 before:hover:w-full  transition-all duration-300  hover:text-dark-900  dark:hover:text-dark-50"
                    href="/projects"
                >
                    Más proyectos <AiOutlineArrowRight />
                </Link>
            </div>
        </Container>
    )
}
