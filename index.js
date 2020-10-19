const frames = document.querySelectorAll('.frame');

let tl = gsap.timeline({ delay: 2 });

tl.set(frames, { visibility: 'visible' });

tl.from(frames, { duration: 2, opacity: 0 })
	.addLabel('moveBoxes')
	.to(frames[0], { duration: 1, x: -50, y: 50 })
	.to(
		frames[2],
		{
			duration: 1,
			x: 50,
			y: -50
		},
		'moveBoxes'
	)
	.addLabel('boxesOnSides')
	.to([frames[0], frames[2]], {
		duration: 2,
		backgroundColor: 'hsl(0, 0%, 5%)',
		borderColor: 'transparent'
	})
	.to(
		frames[0],
		{
			duration: 1,
			x: -300,
			y: 0
		},
		'boxesOnSides'
	)
	.to(
		frames[2],
		{
			duration: 1,
			x: 300,
			y: 0
		},
		'boxesOnSides'
	)
	.addLabel('hideBehindBoxes')
	.set([frames[0], frames[2]], { zIndex: 99 })
	.to(frames[1], { duration: 2, backgroundColor: 'white' })
	.to([frames[0], frames[2]], { duration: 5, x: 0 }, 'hideBehindBoxes+=3');
