// Import Modules
import { setNavClickEvent, hideSections, setHeaderNavEvent } from "./header-nav.js";
import { SetBurgerNavIconEvent } from "./burger-nav.js";
import { setFooterNavContent } from "./footer-nav.js";

(function init(){
    setHeaderNavEvent();
    SetBurgerNavIconEvent();
    setFooterNavContent();

    const paths = [
        ["home.html", "Home"],
        ["about-us.html", "About-us"],
        ["plans.html", "Plans"],
        ["services.html", "Services"],
        ["help.html", "Help"]];

    paths.forEach(path => {
        fetch(`../${path[0]}`)
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector("#"+path[1]).innerHTML = data;
            });
    })
})();
