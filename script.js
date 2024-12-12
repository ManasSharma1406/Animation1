gsap.registerPlugin(ScrollTrigger);

gsap.from("#img1", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    y: 60,
});

gsap.from("#img2", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    y: -60,
});

gsap.from("#img3", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    x: 60,
});

gsap.from("#main>h1", {
    opacity: 0,
    duration: 1,
    delay: 0.1,
    x: 60,
});

gsap.from("#page2 h5, #page2>h1, #page2>#aboutus", {
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2", // Use the entire container as trigger
        scroller: "body",
        start: "top 50%",
    },
});

