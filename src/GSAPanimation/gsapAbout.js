import { gsap } from 'gsap';


const gsapAbout = (questionsRef, rightElementsRef) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;

        gsap.fromTo(
          questionsRef.current[index],
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1}
        );

        gsap.fromTo(
          rightElementsRef.current[index],
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, delay: 0.5 }
        );

        observer.unobserve(entry.target);
      }
    });
  });

  // Observe each question
  questionsRef.current.forEach((question) => {
    observer.observe(question);
  });

  // Clean up the observer on component unmount
  return () => {
    observer.disconnect();
  };
}

export default gsapAbout;