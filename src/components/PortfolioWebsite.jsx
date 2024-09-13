import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import singleProjectData from '../data/singleProjectData'; 
import { useNavigate } from 'react-router-dom';

const PortfolioWebsite = () => {
  const { technology, param } = useParams(); 
  const project = singleProjectData[technology]?.find(p => p.param.toLowerCase() === param.toLowerCase());
  const navigate = useNavigate();

  if (!project) {
    return (
      <div className="text-white text-center mt-40">
        <h1 className="text-4xl">Project not found</h1>
        <Link to="/" className="text-blue-500 mt-4 inline-block">Go back to the homepage</Link>
      </div>
    );
  }

  const color = project.color;
  const rgbColor = project.rgbColor;

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='fixed w-screen flex justify-between backdrop-blur-sm px-4 sm:px-10 py-4 sm:py-8 z-50 text-white'>
        <div className='anton text-[24px] sm:text-[30px] cursor-pointer drop-shadow-sm'>
          Jakub <span style={{ color: rgbColor }}>Sztobryn</span>
        </div>
        <div 
          className={`rounded-full border-4 w-8 h-8 sm:w-10 sm:h-10 flex flex-col justify-center cursor-pointer hover:scale-125 hover:border-[3px] transition-all duration-[300ms]`}
          style={{ borderColor: rgbColor }}
        >
          <Link to="/"><FaArrowLeft className='mx-auto text-xl sm:text-2xl' /></Link>
        </div>
      </div>

      <div className="relative w-screen h-[300px] sm:h-[500px] lg:h-[700px] anton">
        <div className="triangle-bg absolute inset-0"></div>
        <div className="empty-letter absolute bottom-10 sm:bottom-28 right-4 sm:right-16 font-bold text-5xl sm:text-6xl lg:text-8xl tracking-widest text-transparent" 
             style={{ WebkitTextStroke: `1px ${rgbColor}` }}>
          {project.name}
        </div>
      </div>

      <div className='bg-slate-800 text-white anton pt-20 sm:pt-40 px-4 sm:px-10 lg:px-60 text-lg sm:text-xl'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-12 sm:gap-24 mb-12 sm:mb-24'>
            <div className=''>
              <div className='text-3xl sm:text-4xl mb-6 sm:mb-10 w-full sm:w-[400px]'>{project.upperTitle}</div>
              <div className='flex flex-col lg:flex-row gap-8 sm:gap-20'>
                <div className='w-full lg:w-[50%]'>
                  {project.text1.map((text, index) => (
                    <div className='mb-2' key={index} dangerouslySetInnerHTML={{ __html: text }} />
                  ))}
                </div>
                <div className="w-full lg:w-[50%]">
                  {project.text2.map((text, index) => (
                    <div key={index} className={index === 0 ? 'mb-4' : ''} dangerouslySetInnerHTML={{ __html: text }} />
                  ))}
                  <div className='flex flex-col'>
                    <div className='relative mt-8 text-2xl sm:text-3xl'>
                      See it for yourself now and <a href={project.link} target="_blank" rel="noopener noreferrer"><span style={{ color: rgbColor }} className="cursor-pointer">click here</span></a>!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 sm:p-10'>
            {project.project.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-4 sm:gap-8 pb-8 bg-slate-900 p-4 sm:p-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <img src={item.image} className='w-full lg:w-[50%] h-auto' alt={item.title} />
                <div className='flex flex-col justify-center'>
                  <div className='text-2xl sm:text-3xl mb-6 sm:mb-10'>{item.title}</div>
                  <div className='text-base sm:text-lg'>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-slate-800 text-white py-8 sm:py-16 px-4 sm:px-8 anton'>
        <h2 className='text-3xl sm:text-4xl mb-4 sm:mb-8 text-center'>Contact Me</h2>
        <p className='text-center text-base sm:text-xl mb-4 sm:mb-8 max-w-[400px] mx-auto'> If you have any questions or would like to work together, feel free to reach out!</p>
        <div className='flex justify-center' onClick={redirectToHome}>
          <div style={{ backgroundColor: rgbColor }} className="text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-opacity-75 transition-all duration-300 cursor-pointer">Email Me</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioWebsite;