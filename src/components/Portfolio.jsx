import React from 'react'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import nodejs from '../../public/node.png'
import reactjs from '../../public/reactjs.png'

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: reactjs,
            name: "ReactJS"

        },
        {
            id: 4,
            logo: nodejs,
            name: "NodeJS"

        },

    ]
    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
            <div>
                <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                <span className='underline font-semibold'>Featured Project</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-5'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300'>
                                <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' />
                                <div>
                                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, molestiae?</p>
                                </div>
                                <div className='flex justify-around py-2'>
                                    {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button> */}
                                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio