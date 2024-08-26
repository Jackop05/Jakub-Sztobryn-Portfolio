import { gsap } from 'gsap';



const gsapContact = (ref) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.fromTo(
                    ref.current, 
                    { filter: 'blur(8px)' },
                    { filter: 'blur(0px)', duration: 1.2, scrollTrigger: {
                        trigger: ref.current,
                        start: 'top bottom',
                        end: 'bottom top',  
                        toggleActions: 'play none none reverse',
                    }}
                )

                observer.unobserve(entry.target);
            }
        })
    })

    observer.observe(ref.current)

    // Clean up the observer on component unmount
    return () => {
        observer.disconnect();
    };
}

export default gsapContact;