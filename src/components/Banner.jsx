import React from 'react'

export const Banner = ({
    title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image = '/images/programming.png',
    date = '',
    author = '',
    maxWith = '',
}) => {
    return (
        <header
            style={{ backgroundImage: `url(${image})` }}
            className="w-full mt-[68px] h-[300px] bg-cover bg-center bg-no-repeat bg-dark-900/25 bg-blend-darken relative"
            id="banner-page"
        >
            <div
                className={`h-full container mx-auto px-2 ${
                    maxWith ? maxWith : 'lg:max-w-[740px]'
                } flex flex-col justify-end pb-24 `}
            >
                <h1 className="text-3xl font-bold md:w-4/5 text-dark-50 z-[2]">{title}</h1>
                <ul>
                    <li>{date && date}</li>
                    <li>{author && author}</li>
                </ul>
            </div>
        </header>
    )
}
