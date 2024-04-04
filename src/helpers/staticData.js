import GitHubIcon from '@/components/icons/GitHub'
import ApacheIcon from '@/components/icons/stack/Apache'
import AstroIcon from '@/components/icons/stack/Astro'
import CSSIcon from '@/components/icons/stack/CSS'
import DockerIcon from '@/components/icons/stack/Docker'
import ExpressIcon from '@/components/icons/stack/Express'
import FigmaIcon from '@/components/icons/stack/Figma'
import GitIcon from '@/components/icons/stack/Git'
import HtmlIcon from '@/components/icons/stack/Html'
import JavaScriptIcon from '@/components/icons/stack/JavaScript'
import LaravelIcon from '@/components/icons/stack/Laravel'
import MongoDBIcon from '@/components/icons/stack/MongoDB'
import MySQLIcon from '@/components/icons/stack/MySQL'
import NextJSIcon from '@/components/icons/stack/NextJS'
import NginxIcon from '@/components/icons/stack/Nginx'
import NodeJSIcon from '@/components/icons/stack/NodeJS'
import NpmIcon from '@/components/icons/stack/Npm'
import PHPIcon from '@/components/icons/stack/PHP'
import PythonIcon from '@/components/icons/stack/Python'
import ReactJSIcon from '@/components/icons/stack/ReactJS'
import SassIcon from '@/components/icons/stack/Sass'
import TailwindIcon from '@/components/icons/stack/Tailwind'
import TerminalIcon from '@/components/icons/stack/Terminal'
import TypeScriptIcon from '@/components/icons/stack/TypeScript'
import VSCodeIcon from '@/components/icons/stack/VSCode'
import WordPressIcon from '@/components/icons/stack/WordPress'
export const experienceInfo = [
    {
        role: 'Programador FullStack',
        date: 'Enero 2022 - Presente',
        company: 'Colraices',
        description:
            'Encargado de desarrollar soluciones web en empresa del sector financiero e inmobiliario. Desarrollo de convenciones de código internas de acuerdo a buenas prácticas de programación. Liderar el equipo de desarrollo Backend.',
    },
    {
        role: 'Web master',
        date: 'Febrero 2020 - Noviembre 2021',
        company: 'Diocesano Santa María',
        description:
            'Rediseño y mantenimiento de sitio y aplicación web en institución del sector educativo. Dar clases de programación a cursos de ultimo grado. Liderar el comité de Ciencia y Tecnología de la institución.',
    },

    {
        role: 'Técnico de soporte',
        date: 'Diciembre 2018 - Diciembre 2019',
        company: 'La Sucursal',
        description:
            'Desarrollar calculdaora de simulación de costos para materiales de construcción. Administrar y dar soporte técnico al software contable y de facturación. Implementar herramientas de gestión de la comunicación y trabajo en equipo.',
    },

    {
        role: 'Aprendizaje autónomo',
        date: '2018 - 2019',
        company: 'Autónomo',
        description:
            'Primeros pasos en el desarrollo web aprendiendo en mis clases de ingeniería y de forma autodidacta con cursos virtuales, donde creé algunos proyectos personales los cuáles me abrieron las puertas al mundo laboral dentro de la insdustria TI.',
    },
]

export const MY_STACK = {
    frontend: [
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'ReactJS', icon: ReactJSIcon },
        { name: 'TailwindCSS', icon: TailwindIcon },
        { name: 'SASS', icon: SassIcon },
        { name: 'Figma', icon: FigmaIcon },
    ],
    backend: [
        { name: 'PHP', icon: PHPIcon },
        { name: 'NodeJS', icon: NodeJSIcon },
        { name: 'Laravel', icon: LaravelIcon },
        { name: 'ExpressJS', icon: ExpressIcon },
        { name: 'MySQL', icon: MySQLIcon },
        { name: 'MongoDB', icon: MongoDBIcon },
        { name: 'Next.js', icon: NextJSIcon },
        { name: 'Nginx', icon: NginxIcon },
        { name: 'Apache', icon: ApacheIcon },
    ],
    learning: [
        { name: 'Python', icon: PythonIcon },
        { name: 'Astro', icon: AstroIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
    ],
    tools: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Terminal', icon: TerminalIcon },
        { name: 'VSCode', icon: VSCodeIcon },
        { name: 'npm', icon: NpmIcon },
        { name: 'WordPress', icon: WordPressIcon },
    ],
}

export const MY_SERVICES = [
    {
        id: 'web-corporativa',
        subtitle: 'Web corporativa',
        title: {
            text: 'Destaca con una web corporativa de',
            span: 'impacto',
        },
        description:
            'Aprovecha al máximo tu presencia en línea con una web corporativa. Diseñada para destacar, esta solucion te ofrece un sitio en internet sólido para tu empresa o emprendimiento, con una serie de beneficios clave',
        benefits: [
            'Proyección Profesional: Transmita confianza y credibilidad a sus clientes con un diseño corporativo impecable.',
            'Experiencia de Usuario Optimizada: Navegación intuitiva y estructura clara para una experiencia de usuario excepcional.',
            'Personalización Total: Desde la paleta de colores hasta la disposición de contenido, cada detalle se adapta a sus necesidades.',
            'SEO Integrado: Posicione su empresa en los motores de búsqueda y aumente su visibilidad en línea.',
            'Escalabilidad: Preparada para crecer con su empresa, nuestra web corporativa se adapta a sus necesidades en constante evolución.',
        ],
        projects: [
            {
                image: '/images/colraices/cover.webp',
                url: 'https://colraices.com',
                title: 'Colraices',
            },
            {
                image: '/images/agencia-momentum/cover.webp',
                url: 'https://agenciamomentum.co',
                title: 'Momentum',
            },
            {
                image: '/images/diocesano/cover.webp',
                url: 'https://diocesanosantamaria.edu.co',
                title: 'Diocesano SM',
            },
            {
                image: '/images/leasing/cover.webp',
                url: 'https://colraices.com/leasingdavivienda',
                title: 'Leasing Davivienda',
            },
        ],
        button: {
            text: 'Quiero mi web',
            url: 'https://api.whatsapp.com/send?phone=+573113988094&text=Hola+%F0%9F%AB%A1%2C+estoy+interesado+en+el+desarrollo+de+una+web+corporativa+%F0%9F%8C%90+y+me+gustar%C3%ADa+ampliar+la+informaci%C3%B3n+sobre+este+servicio.',
        },
        reverse: false,
    },
    {
        id: 'tienda-en-linea',
        subtitle: 'E-commerce',
        title: {
            text: 'Impulse su negocio en internet con un',
            span: 'e-commerce',
        },
        description:
            'Amplia el alcance y aumente sus ventas con una tienda en línea. Esta solución ofrece una plataforma robusta para su tienda en línea, con los siguientes beneficios:',
        benefits: [
            'Exposición Global: Llegue a un público más amplio y abra nuevas oportunidades de negocio a nivel nacional e internacional.',
            'Personalización Avanzada: Desde la apariencia visual hasta las funcionalidades específicas, cada aspecto se adapta a las necesidades de su negocio.',
            'SEO Integrado: Mejore su visibilidad en línea y aumente el tráfico a su tienda con un sólido enfoque en SEO.',
            'Gestión de Productos: Mantenga un control preciso de sus productos y simplifique la gestión de ofertas, remates y nuevos lanzamientos.',
            'Escalabilidad: Prepárese para el crecimiento con una plataforma flexible que se adapta a las necesidades cambiantes de su negocio.',
        ],
        projects: [
            {
                image: '/images/dotase/cover.webp',
                url: 'https://dotase.com',
                title: 'Dotase',
            },
            {
                image: '/images/valentia/cover.webp',
                url: 'https://valentiaenergía.com',
                title: 'Valentia Energía',
            },
            {
                image: '/images/vitrina/cover.webp',
                url: 'https://colraices.com/casas-apartamentos-colombia-desde-el-exterior',
                title: 'Portal inmobiliario',
            },
        ],
        button: {
            text: 'Quiero mi E-commerce',
            url: 'https://api.whatsapp.com/send?phone=+573113988094&text=Hola+%F0%9F%AB%A1%2C+estoy+interesado+en+el+desarrollo+de+una+tienda+en+linea+%F0%9F%8C%90+y+me+gustar%C3%ADa+ampliar+la+informaci%C3%B3n+sobre+este+servicio.',
        },
        reverse: true,
    },
    {
        id: 'software-a-la-medida',
        subtitle: 'A la medida',
        title: {
            text: 'Aumenta la productividad con',
            span: 'software personalizado',
        },
        description:
            'Potencie su empresa ó emprendimiento con software a medida. Podrá satisfacer sus necesidades específicas, esta solución ofrece una serie de beneficios clave para automatizar procesos y optimizar la eficiencia:',
        benefits: [
            'Adaptabilidad Total: Diseñamos soluciones que se ajustan perfectamente a los procesos y flujos de trabajo de su empresa.',
            'Eficiencia Mejorada: Automatice tareas repetitivas y aumente la productividad de su equipo.',
            'Experiencia de Usuario Superior: Desarrollamos interfaces intuitivas y fáciles de usar para una experiencia de usuario excepcional.',
            'Escalabilidad: Prepárese para el crecimiento futuro con soluciones flexibles que se adaptan a medida que su empresa evoluciona.',
            'Soporte Continuo: Ofrecemos soporte técnico continuo para garantizar que su software funcione de manera óptima en todo momento.',
        ],
        projects: [
            {
                image: '/images/momentum/cover.webp',
                url: 'http://agenciamomentum.co:4501',
                title: 'Colraices',
            },
            {
                image: '/images/cms-vc/cover.webp',
                url: 'https://vc.colraices.com',
                title: 'Gestor de inmuebles',
            },
            {
                image: '/images/bluone/cover.webp',
                url: 'https://one.blubank.co',
                title: 'BluOne',
            },
        ],
        button: {
            text: 'Quiero una solución',
            url: 'https://api.whatsapp.com/send?phone=+573113988094&text=Hola+%F0%9F%AB%A1%2C+estoy+interesado+en+el+desarrollo+de+un+software+a+medida+%F0%9F%8C%90+y+me+gustar%C3%ADa+ampliar+la+informaci%C3%B3n+sobre+este+servicio.',
        },
        reverse: false,
    },
]
