import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden px-6">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 80 },
              color: { value: "#50fa7b" },
              links: {
                color: "#94a3b8",
                distance: 150,
                opacity: 0.4,
                width: 1
              },
              move: { enable: true, speed: 1 },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } }
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" }
              }
            }
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Hi there, I'm
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Jakub Sztobryn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            I specialize in building <span className="text-blue-400 font-medium">responsive websites</span>, 
            <span className="text-purple-400 font-medium"> scalable applications</span>, and 
            <span className="text-teal-400 font-medium"> efficient databases</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Contact Me
            </button>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-medium hover:bg-blue-400/10 transition-all"
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Main;