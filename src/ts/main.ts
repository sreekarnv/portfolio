import { initNavigation } from '~/ts/navigation';

function init(): void {
  initNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

document.addEventListener('astro:page-load', init);
