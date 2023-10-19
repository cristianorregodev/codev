import Image from 'next/image'
import { Container } from '../Container'
import { SectionTitle } from '../SectionTitle'
import { MY_STACK } from '@/helpers/staticData'
export const Stack = () => {
    return (
        <Container>
            <SectionTitle>Tecnologías</SectionTitle>
            <article className="flex flex-col w-full gap-12 overflow-hidden relative mx-auto mt-10 py-6">
                <div className="slide-track-l">
                    {MY_STACK.frontend.map((item, idx) => (
                        <div className="slide" key={idx}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                            <span className="text-primary-600 dark:text-primary-400">{item.name}</span>
                        </div>
                    ))}

                    {MY_STACK.frontend.map((item, idx) => (
                        <div className="slide" key={idx}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                            <span className="text-primary-600 dark:text-primary-400">{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="slide-track-r">
                    {MY_STACK.backend.map((item, idx) => (
                        <div className="slide" key={idx}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                            <span className="text-primary-600 dark:text-primary-400">{item.name}</span>
                        </div>
                    ))}
                    {MY_STACK.backend.map((item, idx) => (
                        <div className="slide" key={idx}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                            <span className="text-primary-600 dark:text-primary-400">{item.name}</span>
                        </div>
                    ))}
                </div>
            </article>
        </Container>
    )
}
