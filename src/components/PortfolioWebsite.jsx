import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import singleProjectData from '../data/singleProjectData'; // Adjust the path accordingly

const AllegroWebsite = () => {
  const { param } = useParams(); 
  const project = singleProjectData.find(p => p.param.toLowerCase() === param.toLowerCase()); // Find the project by param
  console.log(param, project)

  if (!project) {
    return (
      <div className="text-white text-center mt-40">
        <h1 className="text-4xl">Project not found</h1>
        <Link to="/" className={`text-${color} mt-4 inline-block`}>Go back to the homepage</Link>
      </div>
    );
  }

  const color = project.color;
  const rgbColor = project.rgbColor;

  return (
    <div>
      <div className='fixed w-screen flex justify-between backdrop-blur-sm px-16 py-8 z-50 text-white'>
        <div className='anton text-[30px] cursor-pointer drop-shadow-sm'>
          Jakub <span className={`text-${project.color}`}>Sztobryn</span>
        </div>
        <div className={`rounded-full border-4 w-10 h-10 flex flex-col justify-center cursor-pointer hover:border-${color} hover:border-[3px] hover:scale-110 transition-all duration-[300ms]`}>
          <Link to="/"><FaArrowLeft className='mx-auto text-2xl' /></Link>
        </div>
      </div>

      <div className="relative w-screen h-[700px] anton">
        <div className="triangle-bg absolute inset-0"></div>
        <div className={`empty-letter absolute bottom-28 right-16 font-bold text-8xl tracking-widest text-transparent`} style={{ WebkitTextStroke: `1px ${rgbColor}` }}>
            {project.name}
        </div>
      </div>

      <div className='bg-slate-800 text-white anton pt-40 px-60 text-xl'>
        <div className='flex'>
          <div>
            <div className='flex gap-24 w-[90%] mb-24'>
              <div className=''>
                <div className='text-4xl mb-10 w-[400px]'>{project.upperTitle}</div>
                <div className='flex gap-20'>
                    <div className='w-[50%]'>
                        {project.text1.map((text, index) => (
                            <div className={index === 1 ? 'mb-4' : ''} key={index} dangerouslySetInnerHTML={{ __html: text }} />
                        ))}
                    </div>
                    <div className="w-[50%]">
                        {project.text2.map((text, index) => (
                            <div key={index} className={index === 0 ? 'mb-4' : ''} dangerouslySetInnerHTML={{ __html: text }} />
                        ))}
                        <div className='flex flex-col'>
                            <div className='relative mt-8 text-3xl'>
                            See it for yourself now and <span className={`text-${project.color} cursor-pointer`}>click here</span>!
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className='p-10'>
                {project.project.map((item, index) => (
                    <div key={index} className={`flex gap-8 pb-8 bg-slate-900 p-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                        <img src={item.image} className='w-[60%] border-2 border-black' alt={item.title} />
                        <div>
                            <div className='text-3xl mb-10'>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-slate-800 text-white py-16 px-8 anton'>
        <h2 className='text-4xl mb-8 text-center'>Contact Me</h2>
        <p className='text-center text-xl mb-8 max-w-[400px] mx-auto'> If you have any questions or would like to work together, feel free to reach out!</p>
        <div className='flex justify-center'>
          <a className={`bg-${color} text-white py-3 px-6 rounded-full hover:bg-${color} transition-all duration-300 cursor-pointer`}>Email Me</a>
        </div>
      </div>
    </div>
  );
}

export default AllegroWebsite;
