import { Navbar } from '@/components/Navbar'
import { DarkModeProvider } from './providers/DarkModeProvider'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata = {
    title: 'Cristian Orrego 👨‍💻 | FullStack, React, Next, Laravel, NodeJS, Desarrollo',
    description:
        'Hola 👋, soy Cristian Orrego Dev, profesional en Ingeniería en Sistemas y Desarrollador FullStack con más de 3 años de experiencia en TI creando soluciones web desde páginas web informativas hasta aplicaciones web para uso de empresas resolviendo problemas de rendimiento y ayudando en el arduo proceso de digitalización. Echa un vistazo al timeline donde resumo mi experiencia y encuentra al final mi curriculum actualizado.',
}

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning lang="en" className="scroll-smooth">
            <body className="bg-dark-50 dark:bg-dark-950 ">
                <DarkModeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </DarkModeProvider>
            </body>
        </html>
    )
}
