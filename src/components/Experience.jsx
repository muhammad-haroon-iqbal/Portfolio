import React from 'react'
import html from '../../public/html.jpeg'
import css from '../../public/css.png'
import bootstrap from '../../public/bootstrap.png'
import tailwind from '../../public/ta.webp'
import js from '../../public/js.png'
import react from '../../public/React.webp'

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: css,
            name: "CSS"
        },
        {
            id: 3,
            logo: bootstrap,
            name: "Bootstrap"

        },
        {
            id: 4,
            logo: tailwind,
            name: "TailwindCSS"

        },
        {
            id: 5,
            logo: js,
            name: "JavaScript"

        },
        {
            id: 6,
            logo: react,
            name: "React JS"

        },

    ]
    return (
        <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p className='font-semibold'>I have more than 2 yeas of experience in below technologies. </p>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-37 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div key={id} className='flex flex-col w-[175px] h-[175px] items-center justify-center border-[2px] rounded-full shadow-md p-1 cursor-pointer hover:scale-105 duration-300'>
                                <img src={logo} alt="" className='p-1 rounded-full w-2/3 h-2/3 ' />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>

                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Experience