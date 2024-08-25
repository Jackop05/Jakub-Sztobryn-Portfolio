import React, { useEffect, useRef, useState } from 'react';
import gsapSoftskills from '../GSAPanimation/gsapSoftskills';
import { gsap } from 'gsap';
import skillsData from '../data/skillsData' 




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
    <div id="other-skills" className='flex justify-center gap-[150px]'>
      <div className='w-[700px] h-[1000px] flex flex-col justify-center anton'>
        <div className='text-[80px] text-neon-green drop-shadow-sm'>My skills</div>
        
        {/* Right text divs */}
        <div className='text-2xl mb-2 right-text' ref={(el) => (rightTextRefs.current[0] = el)}>
          I believe every programmer should be able to work in a team.
        </div>
        <div className='text-2xl mb-16 right-text' ref={(el) => (rightTextRefs.current[1] = el)}>
          Whether it comes to knowing how to divide work between people, 
          how to commit code without destroying others' work, 
          speaking fluently, or understanding project management fundamentals.
        </div>

        <div className='flex gap-6 border-y-2 border-y-neon-blue p-8 rounded-xl'>
          <div className='flex flex-col w-[40%] gap-0 text-xl'>
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                ref={(el) => (leftItemsRef.current[index] = el)}
                onClick={() => {
                  setSelectedSkill(skill);
                }}
                className={`opacity-0 z-40 cursor-pointer p-2 left-item ${selectedSkill.name === skill.name ? 'shadow-md bg-lighter-blue text-white rounded-md' : 'text-gray-800'} transition-all duration-[300ms]`}
              >
                {skill.name}
              </div>
            ))}
          </div>

          <div className='border-l-2 border-l-neon-blue pl-6 flex flex-col w-[60%] text-xl right-item' ref={rightDefinitionRef}>
            <div className='text-[30px] text-neon-green drop-shadow-sm mb-4'>{selectedSkill.name}</div>
            <div>{selectedSkill.definition}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
