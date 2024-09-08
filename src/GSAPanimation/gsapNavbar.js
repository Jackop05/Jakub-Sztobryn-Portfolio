import { gsap } from 'gsap';

const gsapNavbar = (contactRef) => {
  gsap.fromTo(contactRef.current, 
    { scale: 1 },   
    { 
      scale: 1.35, 
      duration: 1,  
      ease: "power1.inOut", 
      delay: 0.5,   
    }
  );

  gsap.fromTo(contactRef.current, 
    { scale: 1.35 },   
    { 
      scale: 1, 
      duration: 1,      
      ease: "power1.inOut", 
      delay: 0.51,   
    }
  );
}

export default gsapNavbar;
