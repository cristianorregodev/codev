import { Button } from '@/components/Button'
import { Hero } from '@/components/Services/Hero'

export const metadata = {
    title: 'Cristian Orrego Dev 👨‍💻 | Servicios de desarrollo web',
    description:
        'Crece tu presencia en internet. Construimos tu página web en Colombia. Tu tienda en línea al alcance de tu bolsillo.',
    keywords:
        'cristianorregodev, desarrollo web, desarrollo web colombia, desarrollo web colombia, desarrollo web colombia, tienda en linea, desarrollo de e-commerce, desarrollo web cali, desarrollo web medellin, agencia de diseño web colombia',
    metadataBase: new URL('https://cristianorrego.dev'),
    author: 'cristianorregodev',
}

export default function ProjectsPage() {
    return (
        <>
            <Hero />
        </>
    )
}
