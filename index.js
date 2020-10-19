const frame = document.querySelectorAll('.frame');

let tl = gsap.timeline({delay: 2});

tl.set(frame, { visibility: 'visible' });

tl.to(frame[0], { duration: 1, x: -50, y: 50 }).to(
	frame[2],
	{
		duration: 1,
		x: 50,
		y: -50
	},
	'-=1'
);
