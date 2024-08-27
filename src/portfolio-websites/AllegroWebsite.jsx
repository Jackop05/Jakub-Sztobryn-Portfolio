import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft } from 'react-icons/fa';



const AllegroWebsite = () => {
  return (
    <div>
        <div className='fixed w-screen flex justify-between bg-blur-[8px] px-16 py-8 z-50 text-white'>
            <div className='anton text-[30px] cursor-pointer drop-shadow-sm'>Jakub <span className='text-orange-500'>Sztobryn</span></div>
            <div className='rounded-full border-4 w-10 h-10 flex flex-col justify-center cursor-pointer hover:border-orange-500 hover:border-[3px] hover:scale-110 transition-all duration-[300ms]'>
                <FaArrowLeft className='mx-auto text-2xl' />
            </div>
        </div>

        <div class="relative w-screen h-[900px] anton">
            <div class="triangle-bg absolute inset-0"></div>
            <div class="empty-letter absolute bottom-28 right-16 font-bold text-orange-500 text-8xl tracking-widest">
                The allegro clone
            </div>
        </div>

        <div className='bg-slate-800 text-white anton py-40 px-60 text-xl'>
            <div className='flex'>
                <div className='flex gap-24 w-[88%]'>
                    <div className='w-[40%]'>
                        <div className='text-4xl mb-10'>Allegro clone is real world project</div>
                        <div className=''>
                            <div className=''>Allegro clone is a clone of a famous website Allegro.</div> 
                            <div className='mb-4'>It is designed to let user <span className='text-orange-500'>quickly</span> and <span className='text-orange-500'>easily</span> buy whatever he wants.</div>
                            <div className='mb-4'>
                                <span className='text-orange-500'>Adding</span> items to cart, 
                                <span className='text-orange-500'> changing amount</span> of the items right before buying,
                                searching items within certain <span className='text-orange-500'>category</span>, 
                                searching with <span className='text-orange-500'>words</span>, 
                                checking amount of items in the <span className='text-orange-500'>stock</span>
                            </div>
                            <div className="">All those <span className='text-orange-500'>features</span> are here in allegro clone.  </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <div className='text-3xl mb-6 pt-[55px]'></div>
                        <div className=''>
                            <div className='mb-4'>I used technologies common in web development.</div>
                            <div className=''>
                                <span className='text-orange-500'>MongoDB</span> with mongoose for database access, 
                                <span className='text-orange-500'> Tailwind</span> for styling the content, 
                                <span className='text-orange-500'> Vite</span> with <span className='text-orange-500'>React.js</span> to provide client-side rendering,
                                <span className='text-orange-500'> Node.js</span> for server-side rendering,
                                encrypting passwords for safety with <span className='text-orange-500'>bcrypt</span> and many <span className='text-orange-500'>more</span>...     
                            </div>   
                        </div>

                        <div className=''>

                        </div>
                    </div>
                </div>




                <div className='flex flex-col w-[12%]'>
                    <div className='relative top-[75px] text-2xl'>See it for yourself now and <span className='text-orange-500 cursor-pointer'>click here</span>!</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllegroWebsite