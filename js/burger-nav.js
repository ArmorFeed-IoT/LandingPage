import { setNavClickEvent } from "./header-nav.js";

const navTemplate = document.getElementById("template-nav");
const burgerIcon = document.getElementById("burger-nav");
let allowed = true;

export function SetBurgerNavIconEvent(){
    burgerIcon.addEventListener('click', e => {
        const element = document.querySelector('body');
        const referenceNode = document.querySelector('.container');
        navInjection(element,InjectNavInDOM,referenceNode);
    })
}

export function InjectNavInDOM(p,n,referenceNode){
    if(!allowed)
            return;
    const closeButton = document.createElement('li');
    closeButton.innerHTML = '<a class="header__tabs-item close-btn">X</a>';
    // Setting Events in X button
    closeButton.addEventListener('click', e => {
        n.classList.remove('show-nav-animation');
        n.classList.add('hide-nav-animation');
        setTimeout(() => {
            n.classList.remove('hide-nav-animation');
            p.removeChild(n);
        },500);
        allowed = true;
    });
    // Inserting in DOM
    n.appendChild(closeButton);
    p.insertBefore(n,referenceNode);
    setNavClickEvent(n,false);
    allowed = false;
}

export function navInjection(parent,method,referenceNode){
    const p = navTemplate.content.querySelector('.template-tabs-nav');
    const node = p.cloneNode(true);
    const body = document.querySelector('body');
    method(parent,node,referenceNode);
}