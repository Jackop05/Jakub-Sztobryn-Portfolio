import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  const qaPairs = [
    {
      question: "Who?",
      answer: "I'm a 20-year-old student at Warsaw University of Technology with a passion for creating impactful software solutions. My goal is to join a dynamic development team where I can contribute my skills and continue growing."
    },
    {
      question: "What about college?",
      answer: "Currently in my second year of Applied Computer Science, I've mastered clean code in Java and C. This year, I'm expanding my expertise with C++ and C# through advanced coursework and personal projects."
    },
    {
      question: "Best programming language?",
      answer: "With over 2 years of college experience, I've developed strong skills in JavaScript across the full stack. Through many hours of learning and personal projects, I've built everything from interactive UIs to backend API systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            About Me
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-12">
            {qaPairs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-blue-400"
              >
                {item.question}
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-12">
            {qaPairs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-300"
              >
                {item.answer.split('Warsaw University of Technology').map((text, i) => 
                  i === 0 ? text : <span key={i} className="text-blue-400">Warsaw University of Technology</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
