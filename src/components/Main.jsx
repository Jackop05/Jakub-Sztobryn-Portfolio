import React, { useEffect } from 'react';
import gsapMain from '../GSAPanimation/gsapMain';  

const Main = () => {
  useEffect(() => {
    gsapMain();
  }, []);

  return (
    <div id="home" className='main flex flex-col lg:flex-row justify-center items-center lg:gap-[150px] gap-[50px] text-light bg-darker p-6 sm:p-10 lg:py-52'>
      <div className='w-full max-w-[600px] flex flex-col justify-center anton text-center lg:text-left'>
        <div className='text-[28px] sm:text-[38px]'>Hi there, I am</div>
        <div className='text-[50px] sm:text-[60px] lg:text-[80px] text-neon-green drop-shadow-sm'>Jakub Sztobryn</div>
        <div className='text-lg sm:text-2xl'>
          I can create beautiful <span className='text-neon-blue drop-shadow-sm'>websites</span>, 
          complex <span className='text-neon-blue drop-shadow-sm'>software</span>, 
          and work with <span className='text-neon-blue drop-shadow-sm'>databases</span>.
        </div>
        <div className='text-lg sm:text-2xl mt-4'>And I keep learning every day</div>
      </div>
      <div className='flex justify-center lg:justify-start items-center bg-gray-500 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden'>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="my-image" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Main;