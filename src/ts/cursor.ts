interface CursorElements {
	cursor: HTMLElement;
	follower: HTMLElement;
}

interface CursorState {
	mouseX: number;
	mouseY: number;
	cursorX: number;
	cursorY: number;
	followerX: number;
	followerY: number;
}

const CURSOR_SPEED = 0.2;
const FOLLOWER_SPEED = 0.1;

function getElements(): CursorElements | null {
	const cursor = document.getElementById('cursor');
	const follower = document.getElementById('cursor-follower');
	if (!cursor || !follower) return null;
	return { cursor, follower };
}

function animateCursor(elements: CursorElements, state: CursorState): void {
	const { cursor, follower } = elements;

	state.cursorX += (state.mouseX - state.cursorX) * CURSOR_SPEED;
	state.cursorY += (state.mouseY - state.cursorY) * CURSOR_SPEED;
	cursor.style.left = `${state.cursorX}px`;
	cursor.style.top = `${state.cursorY}px`;

	state.followerX += (state.mouseX - state.followerX) * FOLLOWER_SPEED;
	state.followerY += (state.mouseY - state.followerY) * FOLLOWER_SPEED;
	follower.style.left = `${state.followerX}px`;
	follower.style.top = `${state.followerY}px`;

	requestAnimationFrame(() => animateCursor(elements, state));
}

function setupHoverEffects(elements: CursorElements): void {
	const { cursor, follower } = elements;
	const interactiveElements = document.querySelectorAll<HTMLElement>(
		'a, button, input, textarea, select, [data-magnetic]',
	);

	interactiveElements.forEach((el) => {
		el.addEventListener('mouseenter', () => {
			cursor.classList.add('cursor--hover');
			follower.classList.add('cursor__follower--hover');
		});

		el.addEventListener('mouseleave', () => {
			cursor.classList.remove('cursor--hover');
			follower.classList.remove('cursor__follower--hover');
		});
	});
}

function setupVisibilityHandlers(elements: CursorElements): void {
	const { cursor, follower } = elements;

	document.addEventListener('mouseleave', () => {
		cursor.style.opacity = '0';
		follower.style.opacity = '0';
	});

	document.addEventListener('mouseenter', () => {
		cursor.style.opacity = '1';
		follower.style.opacity = '0.5';
	});
}

export function initCursor(): void {
	const elements = getElements();
	if (!elements) return;

	const state: CursorState = {
		mouseX: 0,
		mouseY: 0,
		cursorX: 0,
		cursorY: 0,
		followerX: 0,
		followerY: 0,
	};

	document.addEventListener('mousemove', (e: MouseEvent) => {
		state.mouseX = e.clientX;
		state.mouseY = e.clientY;
	});

	animateCursor(elements, state);
	setupHoverEffects(elements);
	setupVisibilityHandlers(elements);
}
