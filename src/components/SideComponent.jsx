import React from 'react'

const SideComponent = () => {
  return (
    <div>
        <div className='absolute right-0 h-screen'>
            <div className='flex flex-col justify-center gap-4'>
                <div className='rounded-full w-4 h-4 bg-blue'></div>
                <div className='rounded-full w-4 h-4 bg-blue'></div>
                <div className='rounded-full w-4 h-4 bg-blue'></div>
                <div className='rounded-full w-4 h-4 bg-blue'></div>
                <div className='rounded-full w-4 h-4 bg-blue'></div>
            </div>
        </div>
    </div>
  )
}

export default SideComponent