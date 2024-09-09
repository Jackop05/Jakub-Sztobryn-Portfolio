import React, { useEffect, useState, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShoppingCart , FaSchool, FaPen, FaPuzzlePiece, FaSun, FaHatCowboy, FaUtensils, FaApple, FaCalculator } from 'react-icons/fa';
import { AiFillBug } from 'react-icons/ai';
import gsapSkills from '../GSAPanimation/gsapSkills';
import projectsData from '../data/projectsData';
import { Link } from 'react-router-dom';





const TechnologiesAndProjects = () => {
    const iconsArray = [
        [<FaSchool/>, <FaShoppingCart />, <FaPen />, <FaPuzzlePiece />, < FaUtensils/>, < FaHatCowboy/>, <FaApple />, <FaSun />], 
        [],  
        [<FaPuzzlePiece />, <AiFillBug />, <FaCalculator />]
    ];

    const [indexCurrentTechnology, setIndexCurrentTechnology] = useState(0);
    const slideRefs = useRef([]);
    const scaleRefs = useRef([]);

    const technologiesArray =['javascript', 'java', 'c'];
    const currentTechnology = technologiesArray[indexCurrentTechnology];
    const newProjects = projectsData[currentTechnology];

    useEffect(() => {
        gsapSkills(slideRefs, scaleRefs);
    }, []);

    const projects = newProjects?.map((project, index) => {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work cursor-pointer hover:scale-105 transition-all duration-[300ms]"
                contentStyle={{ background: '#fcfcfc', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #2e2e4d' }}
                iconStyle={{ background: '#3370FF', color: '#fff', fontWeight: 'bold' }}
                icon={iconsArray[indexCurrentTechnology][project.iconIndex]}
            >
                <Link to={project.link}>
                    <div className="text-3xl text-neon-green mb-[2px] ">{project.name}</div>
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
                </Link>
            </VerticalTimelineElement>
        )
    });


    const selectedClass = 'scale-110 shadow-xl border-neon-green'


    
    return (
        <div id="skills" className='w-screen flex justify-center bg-darker text-light anton py-[50px] md:py-[100px]'>
            <div className='w-[900px] p-4'>
                <div className=''>
                    <div className='text-[50px] lg:text-[80px] text-neon-green drop-shadow-sm mb-6 text-left '>
                        Here are my projects...
                    </div>
                    <div ref={(el) => (slideRefs.current[0] = el)} data-index="0" className='opacity-0 text-2xl mb-4'>
                        You will find <span className='text-neon-blue drop-shadow-sm'>recreations of famous websites</span> like allegro or apple,  
                        <span className='text-neon-blue drop-shadow-sm'> my own creations</span> like app for extra lessons or maze game
                        and programs that <span className='text-neon-blue drop-shadow-sm'>uses algorithms</span> to give amazing effects. 
                    </div>
                    <div ref={(el) => (slideRefs.current[1] = el)} data-index="1" className='opacity-0 text-2xl mb-8'>
                        Choose technology and see the projects down below
                    </div>
                </div>

                <div className='flex justify-start gap-8 mb-24'>
                    <div ref={(el) => (scaleRefs.current[0] = el)} data-index="0" className='opacity-0 w-[100px] flex flex-col justify-center'  onClick={() => {setIndexCurrentTechnology(0)}}>
                        <div className={`mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-[300ms] ${(indexCurrentTechnology == 0) && selectedClass}`}>
                            <img src={'/images/JS.png'} alt="JS icon" className='rounded-full h-[60px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>JavaScript</div>
                    </div>
                    <div ref={(el) => (scaleRefs.current[1] = el)} data-index="1" className='opacity-0 w-[100px] flex flex-col justify-center' onClick={() => {setIndexCurrentTechnology(1)}}>
                        <div className={`mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-[300ms] ${(indexCurrentTechnology == 1) && selectedClass}`}>
                            <img src={'/images/Java.png'} alt="JAVA icon" className='rounded-full h-[60px] w-[100px] mx-auto' />
                        </div>
                        <div className='text-center text-xl'>Java</div>
                    </div>
                    <div ref={(el) => (scaleRefs.current[2] = el)} data-index="2" className='opacity-0 w-[100px] flex flex-col justify-center' onClick={() => {setIndexCurrentTechnology(2)}}>
                        <div className={`mx-auto mb-2 rounded-full w-[80px] h-[80px] border-4 border-solid border-neon-blue bg-white flex flex-col justify-center cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-[300ms] ${(indexCurrentTechnology == 2) && selectedClass}`}>
                            <img src={'/images/C.png'} alt="C icon" className='rounded-full h-[60px] mx-auto' />
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
