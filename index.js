const frame = document.querySelector('.frame');
// item / time / animation
gsap.to(frame, 5, {
	x: 100,
	y: 200,
	opacity: 0,
	backgroundColor: 'pink'
});
