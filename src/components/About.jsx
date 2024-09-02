import React, { useEffect, useRef } from 'react';
import gsapAbout from '../GSAPanimation/gsapAbout';

const About = () => {
  const questionsRef = useRef([]);
  const rightElementsRef = useRef([]);

  useEffect(() => {
    gsapAbout(questionsRef, rightElementsRef);
  }, []);

  return (
    <div id="about" className='flex flex-col lg:flex-row justify-center lg:gap-[40px] gap-[20px] py-20'>
      <div className='flex flex-col justify-center w-full lg:w-[30%] anton'>
        <div 
          className='opacity-0 relative lg:top-[20px] text-[30px] lg:text-[40px] text-lighter-blue text-center lg:text-right question' 
          ref={(el) => (questionsRef.current[0] = el)}
          data-index="0"
        >Who?</div>
        <div 
          className='opacity-0 relative lg:top-[55px] text-[30px] lg:text-[40px] text-lighter-blue text-center lg:text-right question' 
          ref={(el) => (questionsRef.current[1] = el)}
          data-index="1"
        >What about college?</div>
        <div 
          className='opacity-0 relative lg:top-[105px] text-[30px] lg:text-[40px] text-lighter-blue text-center lg:text-right question' 
          ref={(el) => (questionsRef.current[2] = el)}
          data-index="2"
        >Best programming language?</div>
      </div>
      <div className='flex flex-col justify-center w-full lg:w-[70%] anton'>
        <div className='w-full max-w-[750px] h-auto flex flex-col justify-center anton mx-auto'>
          <div className='text-[40px] lg:text-[80px] text-neon-green drop-shadow-sm mb-6 text-center lg:text-left'>About me</div>
          <div 
            className='opacity-0 text-lg lg:text-2xl mb-4' 
            ref={(el) => (rightElementsRef.current[0] = el)} 
            data-index="0"
          >
            I am 19 years old and currently study at <span className='text-neon-blue drop-shadow-sm'>Warsaw University of Technology</span>.
            My dream is to be a part of a self-leading software team someday.
          </div>
          <div 
            className='opacity-0 text-lg lg:text-2xl mb-4' 
            ref={(el) => (rightElementsRef.current[1] = el)} 
            data-index="1"
          >
            I am attending the second year of <span className='text-neon-blue drop-shadow-sm'>Applied Computer Science</span>.
            There I have learned how to write clear <span className='text-neon-blue drop-shadow-sm'>JAVA</span> and <span className='text-neon-blue drop-shadow-sm'>C</span> code.
            This year I will be learning mostly <span className='text-neon-blue drop-shadow-sm'>C<span className='relative bottom-[2px]'>++</span></span> and <span className='text-neon-blue drop-shadow-sm'>C#</span>.
          </div>
          <div 
            className='opacity-0 text-lg lg:text-2xl' 
            ref={(el) => (rightElementsRef.current[2] = el)} 
            data-index="2"
          >
            My skills in <span className='text-neon-blue drop-shadow-sm'>JavaScript</span>, both Front-end and Back-end,
            I have learned through <span className='text-neon-blue drop-shadow-sm'>3 years</span> of coding with many tutorials on
            Udemy, YouTube, and self-made projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;