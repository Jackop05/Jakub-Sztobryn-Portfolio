import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import projectsData from '../data/projectsData';

const Projects = () => {
  const [techIndex, setTechIndex] = useState(0);
  const technologies = [
    { 
      name: "JavaScript", 
      color: "#f0db4f", 
      icon: "JS.png",
      gradient: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "Java", 
      color: "#5382a1", 
      icon: "Java.png",
      gradient: "from-blue-600 to-blue-800"
    },
    { 
      name: "C", 
      color: "#555555", 
      icon: "C.png",
      gradient: "from-gray-600 to-gray-800" 
    }
  ];

  const currentTech = technologies[techIndex].name.toLowerCase();

  
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              My Projects
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Explore my portfolio featuring <span className="text-blue-400 font-medium">recreations of popular websites</span>, 
              <span className="text-purple-400 font-medium"> original applications</span>, and 
              <span className="text-teal-400 font-medium"> algorithm-driven solutions</span>.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-300">
              Select a technology to view related projects:
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.button
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              viewport={{ once: true }}
              onClick={() => setTechIndex(index)}
              className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all ${
                techIndex === index 
                  ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg`
                  : 'bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <img 
                src={`/images/${tech.icon}`} 
                alt={tech.name} 
                className="w-6 h-6 object-contain"
              />
              <span className="font-medium">{tech.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <VerticalTimeline 
          layout="1-column-left"
          className="vertical-timeline-custom- "
        >
          {projectsData[currentTech]?.map((project, index) => (
            <VerticalTimelineElement
              key={`${currentTech}-${index}`}
              className="vertical-timeline-element--work max-w-[800px]"
              contentStyle={{ 
                background: 'rgba(30, 41, 59, 0.9)',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                borderRadius: '12px'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid rgba(255, 255, 255, 0.3)' 
              }}
              iconStyle={{ 
                background: technologies[techIndex].color,
                color: '#fff',
                boxShadow: `0 0 0 4px ${technologies[techIndex].color}33`
              }}
              icon={
                <div className="flex items-center justify-center h-full text-white">
                  {project.icon}
                </div>
              }
              visible={true}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='max-h-[]'
              >
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {project.name}
                </h3>
                <div className="text-sm mb-4 italic text-gray-400">
                  {project.technologies.join(', ')}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.image && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-lg"
                  >
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="max-h-[350px] h-auto object-cover shadow-lg mx-auto mt-4"
                    />
                  </motion.div>
                )}
                {project.link && (
                  <Link 
                    to={`${project.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Project
                  </Link>
                )}
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Projects;