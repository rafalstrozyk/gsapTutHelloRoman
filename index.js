const frame = document.querySelectorAll('.frame');

gsap.set(frame, { visibility: 'visible' });

gsap.to(frame, { duration: 2,
    stagger: .5, opacity: 0, x: 200,});
