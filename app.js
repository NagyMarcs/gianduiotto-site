document.querySelectorAll('[data-link]').forEach(link => {link.href = window.GIANDUIOTTO.links[link.dataset.link];});
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mobile-nav');
const closeMenu = () => {nav.hidden = true;toggle.setAttribute('aria-expanded','false');};
toggle.addEventListener('click', () => {const open = toggle.getAttribute('aria-expanded') !== 'true';nav.hidden = !open;toggle.setAttribute('aria-expanded', String(open));});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && !nav.hidden){closeMenu();toggle.focus();}});
document.addEventListener('click', event => {if (!event.target.closest('.header')) closeMenu();});
