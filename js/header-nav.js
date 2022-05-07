const template = document.getElementById("template-nav");
const navTemplate = template.content.querySelector('.template-tabs-nav');


export function setHeaderNavEvent(){
    injectNavInHeader();
}

export function setNavClickEvent(element,colorable){
    element.addEventListener('click', e => {
        const element = e.target;
        if(!element.classList.contains('header__tabs-item'))
            return;
        if(element.classList.contains('close-btn'))
            return;
        if(element.classList.contains('not-clickable'))
            return;
        const idName = element.getAttribute('href');
        const section = document.querySelector(idName);
        hideSections();
        if(section.classList.contains('disabled'))
            section.classList.remove('disabled');
        if(element.classList.contains('item-selected') === false && colorable === true)
            element.classList.add('item-selected');
    });
}

export function hideSections() {
    const tabs = document.querySelectorAll(".header__tabs-item");
    tabs.forEach( tab => {
        if(tab.classList.contains('item-selected'))
            tab.classList.remove('item-selected');
        if(tab.classList.contains('not-clickable') || tab.classList.contains('close-btn'))
            return;
        const section = document.querySelector(tab.getAttribute('href'));
        if(section.classList.contains('disabled') === false)
            section.classList.add('disabled');
    });
}

function injectNavInHeader() {
    const node = navTemplate.cloneNode(true);
    const header = document.querySelector('.header');
    const referenceNode = document.querySelector('.burger-nav');
    header.insertBefore(node,referenceNode);
    node.classList.remove('template-tabs-nav');
    node.classList.add('header__tabs');
    setNavClickEvent(node,true);
}