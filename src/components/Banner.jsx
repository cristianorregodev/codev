import React from 'react'

export const Banner = ({
    title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    image = '/banner-three.svg',
}) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full mt-[68px] h-[300px] bg-cover bg-center bg-no-repeat "
        >
            <div className="h-full container mx-auto px-2 lg:px-52 flex flex-col justify-end pb-24 ">
                <h1 className="text-3xl font-bold md:w-4/5 text-dark-50">{title}</h1>
            </div>
        </div>
    )
}
