
import { NAV_ITEMS } from './utils/consts.js';
import { svgIcon } from './utils/icons.js';

const navLinks = document.querySelectorAll('.sidebar-nav-links');

for (let nav of navLinks) {
    const iconObj = NAV_ITEMS.find((item) => nav.textContent.trim() === item.label);
    nav.querySelector('span').innerHTML = svgIcon(iconObj.icon);
}
