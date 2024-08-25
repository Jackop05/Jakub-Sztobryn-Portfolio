import React, { useEffect } from 'react'
import gsapMain from '../GSAPanimation/gsapMain';  



const Main = () => {
  useEffect(() => {
    gsapMain();
  }, [])



  return (
    <div id="home" className='main flex justify-center gap-[150px] bg-gray-100 blur-[8px]'>
      <div className='w-[600px] h-[900px] flex flex-col justify-center anton'>
        <div className='text-[38px]'>Hi there, I am</div>
        <div className='text-[80px] text-neon-green drop-shadow-sm'>Jakub Sztobryn</div>
        <div className='text-2xl'>
          I can to create beautiful <span className='text-neon-blue drop-shadow-sm'>websites</span>, 
          complex <span className='text-neon-blue drop-shadow-sm'>softwares</span>, 
          work with <span className='text-neon-blue drop-shadow-sm'>databases</span></div>
        <div className='text-2xl'>And I keep learning every day</div>
      </div>
      <div className='flex justify-start self-center bg-gray-500 w-[150px]'>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png" alt="my-image" className='w-[200px] h-[200px]' />
      </div>
    </div>
  )
}

export default Main