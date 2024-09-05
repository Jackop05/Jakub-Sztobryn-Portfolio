import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const goto = (link) => { 
    const target = document.getElementById(link);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  }

  

  return (
    <div className='px-6 sm:px-10 py-2 sm:py-4 w-screen fixed flex justify-between items-center z-50 backdrop-blur-sm bg-dark/80 text-light'>
      <div className='anton text-[25px] sm:text-[30px] lg:text-[40px] cursor-pointer drop-shadow-sm hidden md:inline'>Jakub <span className='text-neon-green'>Sztobryn</span></div>
      <div className={`flex justify-around md:justify-end anton text-neon-blue text-lg sm:text-xl lg:text-3xl gap-4 sm:gap-6 lg:gap-8 drop-shadow-2xl text-center bg-transparent w-full md:w-auto transition-transform duration-300 ease-in-out`}>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110 self-center' onClick={() => {goto('home')}}>Home</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110 self-center' onClick={() => {goto('about')}}>About</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110 self-center' onClick={() => {goto('skills')}}>Projects</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110 self-center' onClick={() => {goto('other-skills')}}>Skills</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110 self-center' onClick={() => {goto('contact')}}>Contact me</div>
      </div>
    </div>
  );
}

export default Navbar;