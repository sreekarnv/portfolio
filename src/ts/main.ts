import { initCursor } from '~/ts/cursor';
import { initNavigation } from '~/ts/navigation';
import {
	initScrollAnimations,
	initMagneticButtons,
	initSmoothScroll,
	initHeroAnimations,
} from '~/ts/animations';

function init(): void {
	initCursor();
	initNavigation();
	initMagneticButtons();
	initSmoothScroll();
	initHeroAnimations();
	initScrollAnimations();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}

document.addEventListener('astro:page-load', init);
