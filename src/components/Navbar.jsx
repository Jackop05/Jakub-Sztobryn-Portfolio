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
    setIsOpen(false); // Close menu after navigation on small screens
  }

  return (
    <div className='px-6 sm:px-10 py-4 sm:py-6 w-screen fixed flex justify-between items-center z-50 backdrop-blur-sm bg-white/80'>
      <div className='anton text-[30px] sm:text-[40px] lg:text-[50px] cursor-pointer drop-shadow-sm'>
        Jakub <span className='text-neon-green'>Sztobryn</span>
      </div>
      <div className='flex lg:hidden'>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='text-neon-blue text-3xl focus:outline-none'
        >
          &#9776;
        </button>
      </div>
      <div className={`flex-col lg:flex-row lg:flex items-center anton text-neon-blue text-lg sm:text-xl lg:text-3xl flex gap-4 sm:gap-6 lg:gap-8 drop-shadow-2xl text-center absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'top-[100%]' : 'top-[-100%]'}`}>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('home')}}>Home</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('about')}}>About</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('skills')}}>Projects</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('other-skills')}}>Skills</div>
        <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('contact')}}>Contact me</div>
      </div>
    </div>
  );
}

export default Navbar;