const frame = document.querySelector('.frame');
// item / time / start:animation / stop:animation
gsap.fromTo(
	frame,
	5,
	{
		opacity: 0,
		backgroundColor: 'pink'
	},
	{
		opacity: 0.5,
		backgroundColor: 'blue'
	}
);

gsap.to(frame, 2, { x: 300, delay: 2.5 });
