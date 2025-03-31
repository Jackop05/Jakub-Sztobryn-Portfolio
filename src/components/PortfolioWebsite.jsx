import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import singleProjectData from '../data/singleProjectData';
import { useNavigate } from 'react-router-dom';

const PortfolioWebsite = () => {
  const { technology, param } = useParams();
  const project = singleProjectData[technology]?.find(p => p.param.toLowerCase() === param.toLowerCase());
  const navigate = useNavigate();

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Project not found</h1>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:shadow-lg transition-all"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const { color, rgbColor, name, upperTitle, text1, text2, link, project: projectItems } = project;

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full flex justify-between items-center backdrop-blur-md bg-gray-900/80 px-6 py-4 z-50 border-b border-gray-800"
      >
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
          Jakub <span style={{ color: rgbColor }}>Sztobryn</span>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full border-2 p-2 cursor-pointer"
          style={{ borderColor: rgbColor }}
          onClick={() => navigate('/')}
        >
          <FaArrowLeft className="text-xl" style={{ color: rgbColor }} />
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-gray-900 z-0" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{ 
            background: `linear-gradient(45deg, ${rgbColor}10 0%, transparent 100%)`
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text"
            style={{ backgroundImage: `linear-gradient(45deg, ${rgbColor}, #ffffff)` }}
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl max-w-2xl"
          >
            {upperTitle}
          </motion.p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              {text1.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 text-lg"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
            <div>
              {text2.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`mb-6 text-lg ${index === 0 ? 'font-medium' : ''}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 rounded-lg font-medium transition-all"
                  style={{ 
                    background: rgbColor,
                    color: 'white',
                    boxShadow: `0 4px 20px ${rgbColor}40`
                  }}
                >
                  View Live Project
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Screenshots */}
          <div className="space-y-12">
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm`}
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: rgbColor }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Like what you see?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            onClick={() => navigate('/#contact')}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;