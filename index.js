const frames = document.querySelectorAll('.frame');

let tl = gsap.timeline({ delay: 2 });

tl.set(frames, { visibility: 'visible' });

tl.from(frames, { duration: 2, opacity: 0 })
	.to(frames[0], { duration: 1, x: -50, y: 50 })
	.to(
		frames[2],
		{
			duration: 1,
			x: 50,
			y: -50
		},
		'+=5'
	);
