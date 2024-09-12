import React, { useEffect } from 'react';
import gsapMain from '../GSAPanimation/gsapMain';  

const Main = () => {
  useEffect(() => {
    gsapMain();
  }, []);



  return (
    <div id="home" className='main flex flex-col lg:flex-row justify-center items-center lg:gap-[150px] gap-[50px] text-light bg-darker p-4 sm:p-10 sm:pt-24 lg:py-52 pt-24 lg:mt-0 '>
      <div className='w-full max-w-[600px] flex flex-col justify-center anton text-center lg:text-left'>
        <div className='text-[28px] sm:text-[38px]'>Hi there, I am</div>
        <div className='text-[50px] sm:text-[60px] lg:text-[80px] text-neon-green drop-shadow-sm'>Jakub Sztobryn</div>
        <div className='text-lg sm:text-2xl'>
          I can create beautiful <span className='text-neon-blue drop-shadow-sm'>websites</span>, 
          complex <span className='text-neon-blue drop-shadow-sm'>software</span>, 
          and work with <span className='text-neon-blue drop-shadow-sm'>databases</span>.
        </div>
        <div className='text-lg sm:text-2xl mt-4'>And I keep learning every day.</div>
      </div>
    </div>
  );
};

export default Main;