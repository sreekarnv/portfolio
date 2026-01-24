const SCROLL_THRESHOLD = 50;

interface NavigationElements {
	nav: HTMLElement;
	toggle: HTMLElement;
	mobileMenu: HTMLElement | null;
	mobileLinks: NodeListOf<HTMLElement>;
}

function getElements(): NavigationElements | null {
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('nav-toggle');
	if (!nav || !toggle) return null;

	return {
		nav,
		toggle,
		mobileMenu: document.getElementById('mobile-menu'),
		mobileLinks: document.querySelectorAll<HTMLElement>('.mobile-menu__link'),
	};
}

function setupScrollDetection(nav: HTMLElement): void {
	window.addEventListener(
		'scroll',
		() => {
			if (window.pageYOffset > SCROLL_THRESHOLD) {
				nav.classList.add('nav--scrolled');
			} else {
				nav.classList.remove('nav--scrolled');
			}
		},
		{ passive: true },
	);
}

function toggleMobileMenu(
	elements: NavigationElements,
	forceClose = false,
): void {
	const { toggle, mobileMenu } = elements;

	if (forceClose) {
		toggle.classList.remove('nav__toggle--active');
		mobileMenu?.classList.remove('mobile-menu--active');
		document.body.style.overflow = '';
		return;
	}

	toggle.classList.toggle('nav__toggle--active');
	mobileMenu?.classList.toggle('mobile-menu--active');

	const isOpen = mobileMenu?.classList.contains('mobile-menu--active');
	document.body.style.overflow = isOpen ? 'hidden' : '';
}

function setupMobileMenu(elements: NavigationElements): void {
	const { toggle, mobileLinks } = elements;

	toggle.addEventListener('click', () => toggleMobileMenu(elements));

	mobileLinks.forEach((link) => {
		link.addEventListener('click', () => toggleMobileMenu(elements, true));
	});

	document.addEventListener('keydown', (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			toggleMobileMenu(elements, true);
		}
	});
}

export function initNavigation(): void {
	const elements = getElements();
	if (!elements) return;

	setupScrollDetection(elements.nav);
	setupMobileMenu(elements);
}
