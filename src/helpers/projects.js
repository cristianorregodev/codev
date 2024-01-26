export const PROJECTS = [
    {
        title: 'Portal Vitrina Colombia',
        slug: 'portal-vitrina-colombia',
        category: 'Fullstack',
        date: '2022-06-15',
        content: {
            abstract:
                'Mediante el uso de tecnologías de Backend se construye un servicio API Rest con el propósito de permitir el consumo de los recursos en diferentes servicios, además se construye una interfáz del lado del cliente que permite la gestión de los recursos y otra para el usuario final con fin permitirle acceso a un portal inmobiliaro donde puede navegar por los diferentes tipos de inmuebles.',
            description:
                'Proyecto web fullstack que suple la necesidad de crear un gestor de contenidos autoadministrable y servir el contenido mediante servicios API los cuales son consumidos del lado del cliente, donde se construye una interfaz amigable para que el usuario final pueda navegar y visualizar los diferentes tipos de inmuebles. El sitio web tiene la funcionalidad de guardar en la sesión del usuario los inmuebles marcados como favoritos además de permitirle hacer búsquedas mediante filtro avanzado.',
            technologies: [
                { name: 'MySQL', use: 'Usado para la gestión de base de datos' },
                { name: 'PHP', use: 'Enfocado en el lado del servidor' },
                { name: 'Laravel', use: 'Usado como Framework para trabajar con PHP' },
                { name: 'JavaScript', use: 'Tecnología del lado del cliente' },
                { name: 'ReactJS', use: 'Librería usada para trabajar con JavaScript (Frontend)' },
            ],
            features: {
                intro: '',
                list: [
                    'Sisema de favoritos: Permite al usuario guardar inmueble en una sección de favoritos.',
                    'Filtro básico: Permite al usuario realizar búsquedas mediante filtro básico de precio, ciudad y estado.',
                    'Filtro avanzado: Permite al usuario realizar búsquedas mediante filtro avanzado de precio, ciudad, estado, tipo de inmueble, área y número de baños.',
                    'Detalles de inmueble: Permite al usuario visualizar los detalles de un inmueble',
                ],
            },
            images: {
                cover: '/images/vitrina/cover.webp',
                mockup: '/images/vitrina/mockup.webp',
                responsive: '/images/vitrina/responsive.webp',
                screenshot: '/images/vitrina/screenshot.webp',
            },
        },
        link: 'https://colraices.com/vitrina-colombia',
        repo: '',
    },
    {
        title: 'Sitio web Colraices',
        slug: 'sitio-web-colraices',
        category: 'Frontend',
        date: '2022-05-30',
        content: {
            abstract:
                'Colraices es una empresa con más de 17 años en el mercado Colombiano, tras la pandemía, los directivos deciden hacer un cambio de la identidad corporativa e imagen de marca, a partir de allí se empieza la planeación del cambio del imagen del sitio web de la empresa.',
            description:
                'El equipo de diseño de la empresa construye todo el diseño del sitio web teniendo en cuenta las diferentes estrategías de UX/UI pensando siempre en la experiencia del usuario, aplicando desde luego toda la identidad de marca en cuanto a los colores de la compañia y empleando formas redondeadas y sombras, dando así un diseño novedoso pero simple. \nPara la construcción del sitio se emplean tecnologías como React principalmente, brindado así grandes facilidades al momento de construir las interacciones del usuario final, este sitio web tiene la particularidad de detectar el país de donde se conecta el usuario y dependiendo de esto, mostrar diferentes bloques de información. Mediante la construcción de componentes, se reduce en gran medida la escritura de código, pudiendo reutilizar estas piezas gráficas en las diferentes secciones donde se requieran, de este modo se hace más fácil la manipulación de eventos.',
            technologies: [
                {
                    name: 'PHP',
                    use: 'Utilizado del lado del servidor, encargado de detectar la ubicación del usuario.',
                },
                { name: 'Laravel', use: 'Usado como Framework para trabajar con PHP' },
                { name: 'SASS', use: 'Aplica el diseño visual y responsive del sitio web.' },
                {
                    name: 'ReactJS',
                    use: 'Construcción de la interfaz gráfica del usuario, modularización mediante componentes.',
                },
                { name: 'JavaScript', use: 'Tecnología del lado del cliente' },
            ],
            features: {
                intro: 'Principales característias y funcionalidades del proyecto.',
                list: [
                    'Imagen corporativa: Muestra al público objetivo una identidad de marca que se evidencia en logos y colores.',
                    'Geolocalización: Mediante la IP del cliente detecta su país de origen y en base a el, muestra información relevante.',
                    'Simulación de crédito: Permite al usuario generar una simulación de crédito para poder realizar una compra de un inmueble.',
                ],
            },
            images: {
                cover: '/images/colraices/cover.webp',
                mockup: '/images/colraices/mockup.webp',
                responsive: '/images/colraices/responsive.webp',
                screenshot: '/images/colraices/screenshot.webp',
            },
        },
        link: 'https://colraices.com',
        repo: '',
    },
    {
        title: 'Momentum App',
        slug: 'momentum-app',
        category: 'Fullstack',
        date: '2023-02-17',
        content: {
            abstract:
                'Agencia Momentum es una empresa que se dedica al brindar soluciones de marketing digital, en su proceso de innovación se decide crear una aplicación web cutyo principal objetivo es el de crear una interfaz gráfica que le permita a sus usuarios hacer uso de herramientas de IA como GPT-3, Dall-E-2 o Codex.',
            description:
                'La aplicación está pensada para que los usuarios puedan generar textos de copys, ilustraciones y piezas de código haciendo uso de herramientas de la inteligencia artificial, para ello se diseña y construye una interfaz que le permite al usuario tener las 3 herramientas en un mismo lugar y permitiendole tener un historial de sus consultas. \nEl proyecto está construido bajo el stack MERN usando ReactJS para el desarrollo de la inerfaz y NodeJS para la construcción del backend. Se emplean algunos de las herramientas principales de ReactJS como Context API, los hooks y enrutamiento  por medio de React Router, dispone de secciones como perfil de usuario, historial, generar textos e imágenes. La comunicación con el backend es mediante tecnología API.',
            technologies: [
                {
                    name: 'MongoDB',
                    use: 'Usado para la adminitración de bases de datos.',
                },
                { name: 'Express.js', use: 'Implementación de construcción de API.' },
                {
                    name: 'ReactJS',
                    use: 'Construcción de la interfaz gráfica del usuario, modularización mediante componentes.',
                },
                { name: 'NodeJS', use: 'Configuración del servidor web.' },
            ],
            features: {
                intro: 'Esta aplicación consiste en un login sencillo mediante el cual accede a las principales de funciones que le permiten hacer consultas a modelos de inteligencia articial.',
                list: [
                    'Autenticación: Sistema que permite al usuario crear una nueva cuenta o inciar sesión con una cuenta existente.',
                    'Generar textos: Se conecta al modelo GPT-3.5 para generar textos de acuerdo con un input.',
                    'Generar imágenes: Permite generar ilustraciones de acuerdo a un input dado.',
                    'Filtro por precio',
                    'Generar código: Genera código de acuerdo a las instrucciones dadas.',
                ],
            },
            images: {
                cover: '/images/momentum/cover.webp',
                mockup: '/images/momentum/mockup.webp',
                responsive: '/images/momentum/responsive.webp',
                screenshot: '/images/momentum/screenshot.webp',
            },
        },
        link: 'https://agenciamomentum.co',
        repo: 'https://github.com/cristianorregodev/app-momemtun',
    },
    {
        title: 'Instapets PWA',
        slug: 'instapets-pwa',
        category: 'Frontend',
        date: '2022-02-30',
        content: {
            abstract:
                'Aplicación Web Progresiva inspirada en instagram pero enfocada en mascotas, como lo indica el tipo de aplicación web, esta se puede instalar en el teléfono móvil y simular el funcionamiento de una App Móvil, cuenta con tecnologías de backend y frontend.',
            description:
                'El proyecto consiste en mostrar imágenes de mascotas las cuales el usuario podrá visualizar sin necesidad de estar autenticado, podrá dar like siempre y cuando esté registrado y haya iniciado sesión. Está aplicación tiene la particularidad de ser una PWA (Progressive Web Application) lo cual le otorga la funcionalidad de instalarse en un dispositivo móvil conservando la funcionalidad pero funcionando casi como una aplicación móvil nativa. \nEste proyecto en particular incluye una estructura mediante componentes agrupando el componente y sus estilos en la misma carpeta haciendo uso de Styled Components, además por medio de contenedores se crea la funcionalidad de realizar las peticiones al backend gracias a GraphQL. El proyecto tambien cuenta el uso de Hooks y Custom Hooks para le manejo de estado global de la aplicación y manipular la sesión de usuario. Por último los componentes se agrupan en páginas que son las que finalmente se renderizan indicando cada sección de la aplicación.',
            technologies: [
                {
                    name: 'ReactJS',
                    use: 'Desarrollo del frontend (parte visual)',
                },
                { name: 'NodeJS', use: 'Desarrollo del backend (Lógica de la aplicación)' },
                {
                    name: 'Express.JS',
                    use: 'Configuración de API ',
                },
                { name: 'GraphQL', use: 'Para la interacción con los datos de la API' },
            ],
            features: {
                intro: 'La apllicación al estar conectada con un backend cuenta con diferentes funcones, listaré a continuación algunas de ellas.',
                list: [
                    'Autenticvación: Sistema que permite al usuario crear una nueva cuenta o inciar sesión con una cuenta existente.',
                    'Favoritos: Permite al usuario darle like a una foto y guardarle en una sección de favortios.',
                    'Filtro: Permite al usuario filtrar las publicaciónes por categorías.',
                ],
            },
            images: {
                cover: '/images/instapets/cover.webp',
                mockup: '/images/instapets/mockup.webp',
                responsive: '/images/instapets/responsive.webp',
                screenshot: '/images/instapets/screenshot.webp',
            },
        },
        link: 'https://instapets-mu.vercel.app/',
        repo: 'https://github.com/cristianorregodev/instapets',
    },
    {
        title: 'CMS de inmuebles',
        slug: 'cms-inmuebles',
        category: 'Backend',
        date: '2021-07-23',
        content: {
            abstract:
                'Este proyecto tiene como objetivo brindar a los usuarios, ya sean desarrolladores externos o administradores de contenidos, una solución completa y eficiente para la gestión de inmuebles. A través de la combinación de Laravel y MySQL, se logra desarrollar un sistema de alta calidad que potenciará la administración y promoción de propiedades de manera efectiva.',
            description:
                'En este emocionante proyecto, me embarqué en la creación de un sistema integral de gestión de inmuebles. La misión es desarrollar un sólido API REST y un potente Sistema de Gestión de Contenidos (CMS) que permitan a los usuarios listar, buscar y administrar propiedades de manera eficiente y efectiva.',
            technologies: [
                {
                    name: 'Laravel',
                    use: 'Framework de desarrollo de aplicaciones web',
                },
                { name: 'MySQL', use: 'Gestion de base de datos' },
                {
                    name: 'Blade',
                    use: 'Motor de plantillas HTML',
                },
                { name: 'PHP', use: 'Lenguaje de programación del lado del servidor' },
            ],
            features: {
                intro: 'Estas son algunas de las principales caracerísticas y funcionaldiad del proyecto.',
                list: [
                    'API REST de Inmuebles: Desarrollaremos un API REST robusto basado en Laravel que permitirá acceder y gestionar datos de inmuebles de manera sencilla.',
                    'CMS de Inmuebles: El sistema gestión de contenidos personalizado utilizando Laravel, ofrecerá una interfaz intuitiva para que los administradores puedan agregar, editar y eliminar listados de propiedades.',
                    'Base de Datos MySQL: Se garantiza un rendimiento óptimo y la capacidad de almacenar grandes volúmenes de información sobre propiedades.',
                    'Autenticación y Seguridad: Medidas de seguridad sólidas, incluyendo autenticación de usuarios y autorizaciones, para garantizar que los datos de inmuebles estén protegidos y accesibles solo para usuarios autorizados.',
                ],
            },
            images: {
                cover: '/images/cms-vc/cover.webp',
                mockup: '/images/cms-vc/mockup.webp',
                responsive: '/images/cms-vc/responsive.webp',
                screenshot: '/images/cms-vc/screenshot.webp',
            },
        },
        link: '',
        repo: '',
    },
]
