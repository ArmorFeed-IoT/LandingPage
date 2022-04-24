// Import Modules
import { setNavClickEvent, hideSections, setHeaderNavEvent } from "./headerNav.js";
import { SetBurgerNavIconEvent } from "./burgerNav.js";
import { setFooterNavContent } from "./footerNav.js";

(function init(){
    setHeaderNavEvent();
    SetBurgerNavIconEvent();
    setFooterNavContent();
})();