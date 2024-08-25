import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaSchool } from 'react-icons/fa';



const TechnologiesAndProjects = () => {
    const [elements, setElements] = useState([
        {
            date: "March 2020 - April 2021",
            title: "React.js Developer",
            subtitle: "Starbucks",
            description: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ]
        },
        // Add more initial timeline elements if needed
    ]);

    // const loadMoreItems = () => {
    //     const newElement = {
    //         date: "New Date",
    //         title: "New Position",
    //         subtitle: "New Company",
    //         description: ["New responsibility or achievement"]
    //     };
    //
    //     setElements([...elements, newElement]);
    // };

    // window.onscroll = () => {
    //     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //         loadMoreItems();
    //     }
    // };



    return (
        <div id="skills" className='w-screen flex justify-center bg-gray-100 anton py-[100px]'>
            <div className='w-[900px]'>
                <div className=''>
                    <div className='text-[80px] text-neon-green drop-shadow-sm mb-2 text-left'>Here are my projects...</div>
                    <div className='text-2xl mb-8'>
                        You will find <span className='text-neon-blue drop-shadow-sm'>recreations of famous websites</span> like allegro or apple,  
                        <span className='text-neon-blue drop-shadow-sm'> my own creations</span> like app for extra lessons or maze game
                        and programs that <span className='text-neon-blue drop-shadow-sm'>uses algorithms</span> to give amazing effects. 
                    </div>
                    <div className='text-2xl mb-8'>Choose technology and see the projects down below</div>
                </div>

                <div className='flex justify-start gap-8 mb-32'>
                    <div className='w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-500'>
                            <img src='../public/images/JS.png' alt="JS icon" className='rounded-full h-[60px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>JavaScript</div>
                    </div>
                    <div className='w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-500'>
                            <img src='../public/images/JAVA.png' alt="JS icon" className='rounded-full h-[60px] w-[100px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>Java</div>
                    </div>
                    <div className='w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-500'>
                            <img src='../public/images/C.png' alt="JS icon" className='rounded-full h-[60px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>C</div>
                    </div>
                </div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2e2e4d' }}
                        iconStyle={{ background: '#3370FF', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <div className="text-3xl text-neon-green mb-[2px]">Korepetycje Online</div>
                        <div className="text-md mb-4 italic"><span className='text-neon-blue drop-shadow-sm'>React</span>, <span className='text-neon-blue drop-shadow-sm'>Node</span>, <span className='text-neon-blue drop-shadow-sm'>MongoDb</span>, <span className='text-neon-blue drop-shadow-sm'>Tailwind</span></div>
                        <ul className='text-md'>
                            <li className='mb-[2px]'>Website where you can learn math and phisycs with amazing teachers!</li>
                            <img src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="website image" />
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default TechnologiesAndProjects;