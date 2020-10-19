const tl = gsap.timeline();

const plant = document.querySelectorAll('.plant');
const leafs = document.querySelectorAll('.leaf');
const body = document.getElementsByTagName('body');
const pot = document.getElementById('Pot');
const flower = document.getElementById('flower');
const stem = document.getElementById('stem');

tl.set(body, { backgroundColor: '#111' })

tl.from(pot, 1, { y: -500 })
	.addLabel('lightsOn')
	.to(body, { duration: 1, backgroundColor: '#efd0b1' })
	.set(stem, { opacity: 1 })
	.addLabel('grow')
    .from(stem, 1.5, { scaleY: 0, transformOrigin: '50% 100%' })
    .fromTo(leafs, { scale: 0.8, opacity: 0 }, { duration: 1, scale: 1, opacity: 1, stagger: 1 })
	.fromTo(flower.children, { scale: 0.7, opacity: 0 }, { duration: 0.8, scale: 1, opacity: 1, stagger: 0.3 })

