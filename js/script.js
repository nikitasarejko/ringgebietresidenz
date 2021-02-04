const bodyTag = document.querySelector('body');
const menuToggle = document.querySelector('div.nav__hamburger');
const mobileNavigation = document.querySelector('nav.mobile-nav');

window.addEventListener(
	'load',
	function load()
	{
		window.removeEventListener('load', load, false);
		document.body.classList.remove('preload');
	},
	false);

menuToggle.addEventListener('click', function () {
	mobileNavigation.classList.toggle('is-open');
	
	if (mobileNavigation.classList.contains('is-open')) {
		bodyTag.classList.add('locked');
		
		gsap.set('.mobile-nav__links a', { yPercent: 105, opacity: 0, stagger: 0.15, delay: 0.4, ease: Circ.easeOut });
		gsap.to('.burger-top', { rotation: 45, transformOrigin: '50% 50%', y: -32 });
		gsap.to('.burger-bottom', { rotation: -45, transformOrigin: '50% 50%', y: 32 });
		gsap.to('.mobile-nav__links a', { yPercent: 0, opacity: 1, stagger: 0.15, delay: 0.4, ease: Circ.easeOut });
	} else {
		bodyTag.classList.remove('locked');
		
		gsap.to('.burger-top', { rotation: 0, transformOrigin: '50% 50%', y: 0 });
		gsap.to('.burger-bottom', { rotation: 0, transformOrigin: '50% 50%', y: 0 });
		gsap.to('.mobile-nav__links a', { yPercent: 105, opacity: 0, stagger: 0.15, delay: 0.4, ease: Circ.easeOut });
	}
	
	const mobileLinks = document.querySelectorAll('.mobile-nav__links a');
	
	mobileLinks.forEach(link => {
		link.addEventListener('click', function () {
			if (mobileNavigation.classList.contains('is-open')) {
				mobileNavigation.classList.remove('is-open')
				bodyTag.classList.remove('locked')
				
				gsap.to('.burger-top', { rotation: 0, transformOrigin: '50% 50%', y: 0 });
				gsap.to('.burger-bottom', { rotation: 0, transformOrigin: '50% 50%', y: 0 });
				gsap.to('.mobile-nav__links a', { yPercent: 105, opacity: 0, stagger: 0.15, delay: 0.4, ease: Circ.easeOut });
			}
		})
	})
});

let tl = gsap.timeline({
	// yes, we can add it to an entire timeline!
	scrollTrigger: {
	  trigger: ".swiper-pagination",
	  start: "top center-=100", // when the top of the trigger hits the top of the viewport
	  end: "+=1000", // end after scrolling 500px beyond the start
	  scrub: true
	}
  });

// add animations and labels to the timeline
tl.addLabel("start")
  .to("div.logo", { scale: 0.25, transformOrigin: 'top left' })
  .to("nav.nav", { boxShadow: '0px 0px 19px 0px rgba(125,125,125,0.15', height: '6.4rem' }, 1)
  .to("div.nav__links", { paddingTop: '2rem' }, 1)