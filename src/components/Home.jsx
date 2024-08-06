import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import pic from '../../public/Haroon.png';

const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left Side */}
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Frontend Developer", "React Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est a at sunt nam quos laboriosam? Distinctio facere ab corporis tempore magnam natus fugit, provident quasi assumenda magni deserunt dolore illo non ipsam nemo suscipit explicabo eius. Molestias deleniti nesciunt architecto, facilis libero totam nostrum eligendi laudantium nemo, fuga laboriosam molestiae ducimus numquam iste harum dolor. Inventore autem obcaecati excepturi?</p>
                        <br />
                        {/* Social Media */}
                        <div className='flex justify-between items-center flex-col md:flex-row space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li> <a href="https://www.facebook.com/haroon.iqbal.31" target="_blank"> <FaFacebookSquare className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://www.linkedin.com/in/haroon-iqbal-37b42a1bb/" target="_blank"><FaLinkedin className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://www.twitter.com/haroon.iqbal.31" target="_blank"><FaTwitter className='text-2xl cursor-pointer' /></a></li>
                                    <li><a href="https://www.instagram.com/?hl=en" target="_blank"><FaInstagramSquare className='text-2xl cursor-pointer' /></a></li>
                                </ul>
                            </div>
                            {/* Skills */}
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaCss3Alt className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaBootstrap className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <RiTailwindCssFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* Right Side */}
                    <div className='md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1'>
                        <img src={pic} alt="" className='rounded-full md:w-[450px] md:h-[450px]' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home