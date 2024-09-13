import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsapSoftskills from '../GSAPanimation/gsapSoftskills';
import { gsap } from 'gsap';
import skillsData from '../data/skillsData';

const SoftSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const leftItemsRef = useRef([]);
  const rightTextRefs = useRef([]);
  const rightDefinitionRef = useRef(null);
  const hasAnimatedRef = useRef(false); // Ref to track if animations have been triggered

  useEffect(() => {
    gsapSoftskills(rightTextRefs, leftItemsRef, rightDefinitionRef);
  }, []);

  useEffect(() => {
    // Animate definition on skill change
    if (rightDefinitionRef.current) {
      gsap.fromTo(rightDefinitionRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
    }
    // Only trigger animations once
    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
    }
  }, [selectedSkill]);


  
  return (
    <div id="other-skills" className="flex flex-col items-center p-4 lg:p-10 bg-dark text-light pt-16">
      <div className="w-full max-w-4xl flex flex-col justify-center anton md:mt-16">
        <div className="text-4xl sm:text-5xl lg:text-6xl text-neon-green drop-shadow-sm text-center mb-8">My Skills</div>
        
        <div className="text-lg sm:text-xl mb-2 right-text text-center" ref={(el) => (rightTextRefs.current[0] = el)}>
          I believe every programmer should be able to work in a team.
        </div>
        <div className="text-lg sm:text-xl mb-16 right-text text-center" ref={(el) => (rightTextRefs.current[1] = el)}>
          Whether it's the ability to divide work between people, 
          how to commit code without destroying others work, 
          speaking English fluently or understanding the basics of project management.
        </div>

        <div className="flex flex-col md:flex-row gap-6 border-y-2 border-y-neon-blue p-4 md:p-8 rounded-xl">
          <div className="flex flex-col w-full md:w-[40%] gap-2 text-xl">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                ref={(el) => (leftItemsRef.current[index] = el)}
                onClick={() => {
                  setSelectedSkill(skill);
                }}
                className={`opacity-0 z-40 cursor-pointer p-2 left-item ${selectedSkill.name === skill.name ? 'shadow-md bg-neon-blue text-white rounded-md' : 'text-lighter-blue'} transition-all duration-[300ms]`}
              >
                {skill.name}
              </div>
            ))}
          </div>

          <div className="border-l-2 border-l-neon-blue pl-4 md:pl-6 flex flex-col w-full md:w-[60%] text-xl right-item" ref={rightDefinitionRef}>
            <div className="text-2xl sm:text-3xl text-neon-green drop-shadow-sm mb-4 text-left">{selectedSkill.name}</div>
            <div className="text-base sm:text-lg text-gray-200">
              {selectedSkill.definition}
              {selectedSkill.name == "Git" && <span className='text-neon-blue drop-shadow-sm'><Link to="https://github.com/Jackop05" target="_blank">My Github</Link></span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;