import { gsap } from 'gsap';

const gsapMain = () => {
    gsap.fromTo(
        '.main', 
        { filter: 'blur(8px)' },
        { filter: 'blur(0px)', duration: 1.2 }
        
    );
}

export default gsapMain;