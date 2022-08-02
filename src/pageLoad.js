'use strict'

function PageLoad() {
    ////select body
    const body = document.querySelector('body')

    ////create header
    const header = document.createElement("header");
    body.appendChild(header)
 
    ////creating nav to be appended to header 
    const nav = document.createElement("nav");
    nav.classList.add('menuTabsNav');
    header.appendChild(nav)

    for (let i = 1; i<4; i++) {        
        const divNav = document.createElement("div");
        divNav.dataset.divNavID = `${i}`;
        console.log(typeof(divNav.dataset.divNavID));
        
        nav.appendChild(divNav);
    }    

    const menuTabsNav = document.querySelector('.menuTabsNav')

    ////menu Tabs 
    const menuTabs = document.querySelectorAll('[data-div-nav-i-d]');
    menuTabs[0].textContent = 'home'
    menuTabs[1].textContent = 'menu'
    menuTabs[2].textContent = 'meet the team!'

    const getMenuTabsNav = () => menuTabsNav

    ////create content
    const content = document.createElement('div')
    content.id = 'content'
    body.appendChild(content)


 

    ////create footer
    const footer = document.createElement('footer');
    body.appendChild(footer);

    const footerUl = document.createElement('ul');
    footer.appendChild(footerUl);

    const footerUlLiOne = document.createElement('li');
    footerUl.appendChild(footerUlLiOne);

    const footerUlLiOneA = document.createElement('a');
    footerUlLiOneA.href = "https://pixabay.com/illustrations/potato-potato-character-cartoon-1487142/"
    footerUlLiOneA.textContent = "background image created by nneem - www.pixabay.com"
    footerUlLiOne.appendChild(footerUlLiOneA);

    const footerUlLiTwo = document.createElement('li');
    footerUl.appendChild(footerUlLiTwo);

    const footerUlLiThree = document.createElement('li');
    footerUl.appendChild(footerUlLiThree);

    return {getMenuTabsNav}
    
}


export {PageLoad};

