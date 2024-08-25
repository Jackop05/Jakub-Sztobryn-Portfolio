import React, { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShoppingCart , FaSchool, FaPen, FaPuzzlePiece, FaSun, FaHatCowboy, FaUtensils, FaApple } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsapSkills from '../GSAPanimation/gsapSkills';
import projectsData from '../data/projectsData';



gsap.registerPlugin(ScrollTrigger);



const TechnologiesAndProjects = () => {
    const icons = [<FaSchool/>, <FaShoppingCart />, <FaPen />, <FaPuzzlePiece />, < FaUtensils/>, < FaHatCowboy/>, <FaApple />, <FaSun />];

    const slideRefs = useRef([]);
    const scaleRefs = useRef([]);

    useEffect(() => {
        gsapSkills(slideRefs, scaleRefs);
    }, []);

    const projects = projectsData?.map((project, index) => {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #2e2e4d' }}
                iconStyle={{ background: '#3370FF', color: '#fff', fontWeight: 'bold' }}
                icon={icons[project.iconIndex]}
            >
                <div className="text-3xl text-neon-green mb-[2px]">{project.name}</div>
                <div className="text-md mb-4 italic">
                    {
                        project.technologies.map((technology, index) => {
                            if(index == project.technologies.length - 1){
                                return <span className='text-neon-blue drop-shadow-sm'>{technology}</span>
                            } else {
                                return <span className='text-neon-blue drop-shadow-sm'>{technology}, </span>
                            }
                        })
                    }
                </div>
                <ul className='text-md'>
                    <li className='mb-[2px]'>{project.description}</li>
                    <img src={project.image} alt="website image" />
                </ul>
            </VerticalTimelineElement>
        )
    })


    
    return (
        <div id="skills" className='w-screen flex justify-center bg-gray-100 anton py-[100px]'>
            <div className='w-[900px]'>
                <div className=''>
                    <div className='text-[80px] text-neon-green drop-shadow-sm mb-2 text-left'>
                        Here are my projects...
                    </div>
                    <div ref={(el) => (slideRefs.current[0] = el)} data-index="0" className='opacity-0 text-2xl mb-8'>
                        You will find <span className='text-neon-blue drop-shadow-sm'>recreations of famous websites</span> like allegro or apple,  
                        <span className='text-neon-blue drop-shadow-sm'> my own creations</span> like app for extra lessons or maze game
                        and programs that <span className='text-neon-blue drop-shadow-sm'>uses algorithms</span> to give amazing effects. 
                    </div>
                    <div ref={(el) => (slideRefs.current[1] = el)} data-index="1" className='opacity-0 text-2xl mb-8'>
                        Choose technology and see the projects down below
                    </div>
                </div>

                <div className='flex justify-start gap-8 mb-32'>
                    <div ref={(el) => (scaleRefs.current[0] = el)} data-index="0" className='opacity-0 w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-[300ms]'>
                            <img src='../public/images/JS.png' alt="JS icon" className='rounded-full h-[60px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>JavaScript</div>
                    </div>
                    <div ref={(el) => (scaleRefs.current[1] = el)} data-index="1" className='opacity-0 w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-[300ms]'>
                            <img src='../public/images/JAVA.png' alt="JAVA icon" className='rounded-full h-[60px] w-[100px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>Java</div>
                    </div>
                    <div ref={(el) => (scaleRefs.current[2] = el)} data-index="2" className='opacity-0 w-[100px] flex flex-col justify-center'>
                        <div className='mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-[300ms]'>
                            <img src='../public/images/C.png' alt="C icon" className='rounded-full h-[60px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>C</div>
                    </div>
                </div>

                <VerticalTimeline>
                    {projects}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default TechnologiesAndProjects;
