import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import skillsData from '../data/skillsData';

const SoftSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              My Skills
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            I believe every programmer should be able to work in a team.
          </p>
          <p className="text-xl md:text-2xl text-gray-300">
            Whether it's dividing work effectively, committing code safely, 
            communicating fluently, or understanding project management basics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 md:p-8"
        >
          <div className="w-full md:w-2/5 space-y-4">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedSkill(skill)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedSkill.name === skill.name
                    ? 'bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-green-400/30 shadow-lg shadow-green-500/10'
                    : 'bg-gray-600/50 hover:bg-gray-600/70 border border-gray-500/30'
                }`}
              >
                <h3 className={`text-lg font-medium ${
                  selectedSkill.name === skill.name 
                    ? 'text-green-400' 
                    : 'text-gray-300'
                }`}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-3/5 border-t md:border-t-0 md:border-l border-gray-600 pt-6 md:pt-0 md:pl-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {selectedSkill.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {selectedSkill.definition}
              {selectedSkill.name === "Git" && (
                <Link 
                  to="https://github.com/Jackop05" 
                  target="_blank"
                  className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  My GitHub
                </Link>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;