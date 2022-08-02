'use strict'

import './style.css';
// import Potato from './potato.png';
import {PageLoad} from './pageLoad.js';
import {homeCreate} from './home.js';
import {menuCreate} from './menu.js';
import {meetTheTeamCreate} from './meetTheTeam.js';
import frenchFriesPic from './frenchFries.jpg';



function ScreenController() {
    const pageLoad = PageLoad();

    homeCreate();
    menuCreate();
    meetTheTeamCreate();

      
  
    function switchTabs(tab) {

        ////getting tabContents
        const tabContents = document.querySelectorAll('.tabContents');

        const selectedTabTarget = document.getElementById(`${tab.target.dataset.divNavID}`)
        
        if (!selectedTabTarget) return;
        console.log(selectedTabTarget);

        ////remove class 'active' from all contents
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active')
        })

        ////add 'active' class to tabTarget corresponding to the the selectedTabTarget
        
        selectedTabTarget.classList.add('active');

        ////

    }

    const menuTabsNav = pageLoad.getMenuTabsNav();
    console.log(menuTabsNav);
    menuTabsNav.addEventListener('click', switchTabs)

}



ScreenController()

// menuTabs.forEach((tab) => {
//     console.log(tab);
    
// })


// menuTabs.forEach((tab)=> {
//     tab.addEventListener('click', switchTabs)
// })






/*
html set up

header
    nav
        div
        div
        div
    /navs


div id=content
    div 
    div
    div
/div

footer 
    ul
        li
        li
        li
    /ul
/footer

script src 


*/



/*
JS set up

function PageLoad() {
    
}



*/
