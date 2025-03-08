

// index.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Navbar animation
    gsap.from('.nav-container', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Hero animation
    gsap.from('.hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3
    });

    gsap.from('.hero-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
    });

    // About section animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2
    });

    // Contact section animation
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });

    gsap.from('.contact-image', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2
    });

    // Footer animation
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

