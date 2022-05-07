import { setNavClickEvent } from "./header-nav.js";

const footer = document.getElementById("footer");
const footerDescription = footer.querySelector('.footer__description');
const template = document.getElementById("template-nav");
const navTemplate = template.content.querySelector('.template-tabs-nav');

export function setFooterNavContent(){
    const node = navTemplate.cloneNode(true);
    node.classList.remove('show-nav-animation');
    footer.insertBefore(node,footerDescription);
    setNavClickEvent(node,false);
}