import React from 'react'
import { Paragraph } from '@/components/Paragraph'
import WhatsAppIcon from '@/components/icons/WhatsApp'
import { Poppins } from 'next/font/google'

const monserrat = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const Hero = () => {
    return (
        <header className="mt-16 container mx-auto px-2 lg:w-[1114px] lg:px-0 lg:grid lg:grid-cols-2 gap-4 place-items-center lg:h-[600px] z-20">
            <section className="pt-16 lg:pt-0">
                <h1
                    className={`${monserrat.className} text-3xl uppercase font-bold lg:text-5xl text-dark-700 dark:text-dark-200`}
                >
                    <span className="text-sm lg:text-2xl block">
                        Impulsa tu{' '}
                        <span className="bg-gradient-to-t from-[#ffb272] to-[#ee4a08] dark:from-[#ffebd4] dark:to-[#fd6412] bg-clip-text  text-transparent">
                            {' '}
                            éxito en línea
                        </span>{' '}
                    </span>
                    con un{' '}
                    <span className="bg-gradient-to-t from-[#75dbff] to-[#0072ab] dark:from-[#def3ff] dark:to-[#00a8e8] bg-clip-text  text-transparent font-extrabold">
                        sitio web profesional
                    </span>{' '}
                </h1>
                <Paragraph classes="text-base my-6 mb-12">
                    Potencia tu presencia en línea con soluciones web personalizadas. Desde páginas personales hasta
                    e-commerce y proyectos corporativos, ¡hacemos realidad tu visión digital!
                </Paragraph>
                <a
                    href="https://api.whatsapp.com/send?phone=+573113988094&text=Hola+%F0%9F%AB%A1%2C+estoy+interesado+en+el+desarrollo+de+un+sitio+web+%F0%9F%8C%90+y+me+gustar%C3%ADa+ampliar+la+informaci%C3%B3n+sobre+tus+servicios."
                    target="_blank"
                    className=" flex justify-center items-center gap-2 rounded-full bg-crusta-500 hover:bg-crusta-700 px-6 py-3 text-lg font-bold text-dark-100 transition-colors md:max-w-fit"
                >
                    Ponerme en contacto <WhatsAppIcon className="size-6" />
                </a>
            </section>
            <section className="flex mt-14 justify-center">
                <div className="bg-crusta-500 dark:bg-crusta-500 rounded-xl shadow-lg px-1 md:px-4 py-3 md:py-6 -rotate-12  hover:scale-125 hover:z-10 transition-transform w-28 md:w-48 relative left-3">
                    <img src="/images/building_websites.svg" alt="Ilustración desarrollo web" />
                    <h2 className="font-bold text-dark-50 my-2 text-center md:text-left">Corporativa</h2>
                    <p className="hidden md:block text-xs text-dark-50">
                        Ideal para emprendedores, pequeñas empresas e instituciones.
                    </p>
                </div>
                <div className="bg-primary-500 dark:bg-primary-500 rounded-xl shadow-lg px-1 md:px-4 py-3 md:py-6 -translate-y-6 hover:scale-125 hover:z-10 transition-transform w-28 md:w-48 relative ">
                    <img src="/images/web_shopping.svg" alt="Ilustración e-commerce" />
                    <h2 className="font-bold text-dark-50 my-2 text-center md:text-left">E-commerce</h2>
                    <p className="hidden md:block text-xs text-dark-50">
                        Facilita la vida de tus clientes permitiendoles realizar sus compras por internet.
                    </p>
                </div>
                <div className="bg-crusta-500 dark:bg-crusta-500 rounded-xl shadow-lg px-1 md:px-4 py-3 md:py-6 rotate-12  hover:scale-125 hover:z-10 transition-transform w-28 md:w-48 relative right-3">
                    <img src="/images/web_developer.svg" alt="Ilustración programador" />
                    <h2 className="font-bold text-dark-50 my-2 text-center md:text-left">A la medida</h2>
                    <p className="hidden md:block text-xs text-dark-50">
                        Lleva tus procesos al siguiente nivel con soluciones de automatización en la web.
                    </p>
                </div>
            </section>
        </header>
    )
}
