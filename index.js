// GSAP Navbar Animation
gsap.from(".nav-btn,.logo", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power.out",
});

gsap.from(".nav-items", {
    y: -120,
    opacity: 0,
    duration: 0.7,
    delay: 0.3,
    ease: "power3.out",
});

// Hero Section Animation
gsap.from(".hero-heading,.hero-para,.hero-btn", {
    y: 150,
    x: -150,
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
    ease: "power2.out",
    stagger: 0.2,
});

gsap.from(".hero-section img", {
    x: 150,
    y: 150,
    opacity: 0,
    duration: 0.9,
    delay: 0.3,
    ease: "power.out",
});

// About Section Animation (with ScrollTrigger)
gsap.registerPlugin(ScrollTrigger);

let aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        end: "top 20%",
        scrub: 1.5,
    }
});

aboutTL.from(".about-image", {
    x: -250,
    y: 250,
    opacity: 0,
    duration: 0.6,
    ease: "power.out",
});

aboutTL.from(".about-heading,.about-para", {
    y: 250,
    x: 250,
    opacity: 0,
    duration: 0.6,
    ease: "power.out",
    stagger: 0.2,
}, "-=0.5");

// Contact Section Animation
let contactTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        end: "top 20%",
        scrub: 1.5,
    }
});

contactTL.from(".contact-image", {
    x: 250,
    y: 250,
    opacity: 0,
    duration: 1.5,
    ease: "power.out",
});

contactTL.from(".contact-heading, .contact-para, .input, .submit", {
    x: -250,
    y: 250,
    opacity: 0,
    duration: 1.5,
    ease: "power.out",
    stagger: 0.2,
}, "-=0.5");

contactTL.from(".inner-container, .container", {
    transform: "scale(0.5)",
    opacity: 0,
    duration: 1,
}, "-=1");

// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

    // GSAP animation for menu items appearing
    if (navMenu.classList.contains("active")) {
        gsap.from(".nav-items li", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.1,
        });
    }
});
