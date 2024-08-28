import React from 'react'

const Navbar = () => {

  const goto = (link) => { 

      const target = document.getElementById(link);
      console.log(link)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      console.log(target);
  }

  return (
    <div className='px-10 py-6 w-screen fixed flex justify-between z-50 backdrop-blur-sm'>
        <div className='anton text-[50px] cursor-pointer drop-shadow-sm'>Jakub <span className='text-neon-green'>Sztobryn</span></div>
        <div className='flex flex-col justify-center'>
          <div className='anton text-neon-blue text-3xl flex gap-8 drop-shadow-2xl text-center'>
              <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('home')}}>Home</div>
              <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('about')}}>About</div>
              <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('skills')}}>Projects</div>
              <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('other-skills')}}>Skills</div>
              <div className='cursor-pointer transition-all duration-[300ms] hover:scale-110' onClick={() => {goto('contact')}}>Contact me</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;