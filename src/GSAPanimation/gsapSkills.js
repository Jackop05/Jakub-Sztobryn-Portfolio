import { gsap } from 'gsap';



const gsapSkills = (slideRefs, scaleRefs) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = entry.target.dataset.index;
                console.log(index)
        
                gsap.fromTo(
                    slideRefs.current[index], 
                    { x: 200, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 1.5, scrollTrigger: {
                        trigger: slideRefs.current[index],
                        start: 'top bottom',
                        end:  'bottom top',
                        toggleAttribute: 'play one none reverse',
                    }},
                );

                gsap.fromTo(
                    scaleRefs.current[index],
                    { scale: 0, opacity: 0 }, 
                    { scale: 1, opacity: 1, duration: 1.5 }
                );

                observer.unobserve(entry.target);
            }
        });
    });
    
    
    scaleRefs.current.forEach((question) => {
        observer.observe(question);
    });


    return () => {
        observer.disconnect();
    };
}

export default gsapSkills;