gsap.from(".nav-btn,.logo",{
    y:-150,
    opacity:0,
    duration:0.9,
    delay:0.5,
    ease:"power.out",
});

gsap.from(".nav-items",{
    y:-180,
    opacity:0,
    duration:0.8,
    delay:0.5,
    ease:"power3.out", 
});

gsap.from(".hero-heading,.hero-para,.hero-btn",{
    y:250,
    x:-250,
    opacity:0,
    duration:1,
    delay:0.5,
    ease: "power2.out",
    stagger:0.2
});

gsap.from(".hero-section img",{
    x:250,
    y:250,
    opacity:0,
    duration:1,
    delay:0.5,
    ease:"power.out",
});


var tl = gsap.timeline({
    scrollTrigger: {
        trigger:".about-section",
        scroll:"body",
        start:"top 80%",
        end:"top 10%",
        scrub:2,
    }
});


tl.from(".about-image",{
    x:-450,
    y:450,
    duration:0.5,
    opacity:0,
    delay:0.5,
    ease: "power.out",
});

tl.from(".about-heading,.about-para",{
    y:450,
    x:450,
    duration:0.5,
    opacity:0,
    delay:0.5,
    ease: "power.out",
    stagger:0.2,
},"-=1");

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".contact-section",
        scroller:"body",
        start:"top 60%",
        end:"top 10%",
        scrub:2,
    }
})


tl2.from(".contact-image",{
    x:450,
    y:450,
    duration:2.5,
    opacity:0,
    delay:0.5,
    ease: "power.out",
});


tl2.from(".contact-heading, .contact-para, .input, .submit",{
    x:-450,
    y:450,
    duration:5.5,
    opacity:0,
    delay:0.8,
    ease: "power.out",
    stagger:0.2,
},"-=1");


tl2.from(".inner-container, .container",{
    transform:"scale(0.1)",
    duration:1.8,
    opacity:0,
    delay:0.5,
},"=2");
