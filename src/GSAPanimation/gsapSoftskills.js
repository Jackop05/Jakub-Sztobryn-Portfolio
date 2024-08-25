import { gsap } from 'gsap';



const gsapSoftSkills = (rightTextRefs, leftItemsRef, rightDefinitionRef) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('right-text')) {
              gsap.fromTo(entry.target, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
            }
            if (entry.target.classList.contains('left-item')) {
              gsap.fromTo(entry.target, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
            }
            if (entry.target.classList.contains('right-item')) {
              gsap.fromTo(entry.target, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
            }
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      });
  
      // Observe right text elements
      rightTextRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      // Observe left items
      leftItemsRef.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
  
      // Observe right definition element
      if (rightDefinitionRef.current) {
        observer.observe(rightDefinitionRef.current);
      }
  
      return () => observer.disconnect(); // Clean up on unmount
}

export default gsapSoftSkills;