import React from 'react'

const About = () => {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <p>Hello, I'm Haroon, a passionate Web developer with a keen eye for MERN
                    Stack . With a background in Sciences, I strive to create impactful and
                    visually stunning Software solutions that leave a lasting impression.</p>
                <br />

                {/* Edyctuion */}
                <h1 className='text-green-500 font-semibold text-xl'>Education</h1>
                <span>
                    M.Sc Physics, University of Agriculture Faisalabad,2018
                </span>
                <br />
                <span>
                    B.Sc(Math A,Math B, Physics), G.C University Faisalabad,2016
                </span>
                <br />
                <br />

                {/* Skills */}
                <h1 className='text-green-500 font-semibold text-xl'>Skills & Expertise</h1>
                <ul className='flex flex-col space-y-1'>
                    <li><strong>Programming Languages:</strong>JavaScript, TypeScript.</li>
                    <li><strong>Software Tools/Technologies:</strong>React JS, Tailwind CSS, SCSS (SASS).</li>
                    <li><strong>Design Principles/Concepts:</strong>Strong grasp of responsive design, component-based architecture, and user experience (UX) principles.</li>
                    <li><strong>Problem-Solving:</strong>Excellent problem-solving skills demonstrated through optimizing performance in React applications and implementing scalable component libraries.</li>
                    <li><strong>Communication & Collaboration:</strong>Effective communicator and collaborator, skilled in working with cross-functional teams, and adept at translating complex technical concepts into actionable solutions.</li>
                </ul>

                <br />
                <br />

                {/* Experience */}
                <h1 className="text-green-600 font-semibold text-xl">
                    Professional Experience
                </h1>
                <p>
                    Front End Developer, <strong>HM Zone Faisalabad (2023 - 2024),</strong> ReactJS, Tailwind CSS, SCSS
                </p>
                <p>
                    Front End Developer, <strong>WebXpert Faisalabad (2022 - 2023),</strong> HTML, CSS, Bootstrap, Java Script
                </p>
                <br />
                <br />

                {/* Mission Statement */}
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p>
                    My mission is to leverage my skills and creativity to deliver dynamic websites using the React JS library that exceed client expectations. Committed to continuous learning and growth, I seek new challenges and opportunities to expand my expertise and contribute positively to the digital landscape.
                </p>
            </div>
        </>
    )
}

export default About