window.addEventListener('load', animation)

function animation(){

    const TimeLine = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: "power4.out"
        }
    })

    TimeLine
    .from('.logo', { x: -20 })
    .from('.menu-links ul li', { x: -20, stagger: 0.01 })
    .from('.title', { y: 20 }, "-=0.2")
    .from('.tagline', { y: 20 }, "-=0.7")
    .from('.desc', { y: 20 }, "<")
    .from('.beer', { y: -800 })
    .to('.beer', {
        y: '10%',
        // opacity: 1,
        autoAlpha: 1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        duration: 2
    }, "+=0.1")


}