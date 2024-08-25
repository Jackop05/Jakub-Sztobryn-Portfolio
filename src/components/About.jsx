import React from 'react'

const About = () => {
  return (
    <div id="about" className='flex justify-center gap-[40px]'>
        <div className='flex flex-col justify-center w-[30%] anton'>
          <div className='relative top-[20px] text-[40px] text-lighter-blue text-right'>Who?</div>
          <div className='relative top-[55px] text-[40px] text-lighter-blue text-right'>What about college?</div>
          <div className='relative top-[105px] text-[40px] text-lighter-blue text-right'>Best programming language?</div>
        </div>
        <div className='flex flex-col justify-center anton w-[70%]'>
          <div className='w-[750px] h-[700px]  flex flex-col justify-center anton'>
            <div className='text-[80px] text-neon-green drop-shadow-sm mb-6'>About me</div>
            <div className='text-2xl mb-4'>
              I am 19 years old and currently study at <span className='text-neon-blue drop-shadow-sm'>Warsaw University of Technology</span>. 
              My dream is to be a part of self-leading software team someday.
            </div>
            <div className='text-2xl mb-4'>
              I am attending second year of <span className='text-neon-blue drop-shadow-sm'>Applied Computer Science</span>. 
              There I have learned how to write clear <span className='text-neon-blue drop-shadow-sm'>JAVA</span> and <span className='text-neon-blue drop-shadow-sm'>C</span> code.
              This year I will be learning mostly <span className='text-neon-blue drop-shadow-sm'>C<span className='relative bottom-[2px]'>++</span></span> and <span className='text-neon-blue drop-shadow-sm'>C#</span>.  
            </div>
            <div className='text-2xl'>
              My skills in <span className='text-neon-blue drop-shadow-sm'>JavaScript</span>, both Front-end and Back-end, 
              I have learned through <span className='text-neon-blue drop-shadow-sm'>3 years</span> of coding with many tutorials on 
              Udemy, YouTube and self-made projects.
            </div>
          </div>
        </div>


        
    </div>
  )
}

export default About