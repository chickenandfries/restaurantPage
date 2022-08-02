import frenchFriesPic from './frenchFries.jpg';


function menuCreate() {
    ////MENU CONTENT
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('tabContents')
    menu.id = '2';
    content.appendChild(menu);

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('tabContentHeader');
    menuHeader.classList.add('titleContainer');
    menu.appendChild(menuHeader);

    const menuHeaderHeading = document.createElement('h1');
    menuHeaderHeading.classList.add('menuHeaderHeading');
    menuHeaderHeading.textContent = 'menu'
    menuHeader.appendChild(menuHeaderHeading);


    const menuEntrees = document.createElement('div');
    menuEntrees.classList.add('menuEntrees');
    menuEntrees.classList.add('titleContainer');
    menu.appendChild(menuEntrees);

    const menuEntreesHeading = document.createElement('h2');
    menuEntreesHeading.classList.add('menuEntreesHeading');
    menuEntreesHeading.textContent = 'Entrees';
    menuEntrees.appendChild(menuEntreesHeading);


    const frenchFries = document.createElement('div');
    frenchFries.classList.add('frenchFries');
    frenchFries.classList.add('contentContainer');
    menu.appendChild(frenchFries);

    const frenchFriesHeading = document.createElement('h2');
    frenchFriesHeading.classList.add('frenchFriesHeading');
    frenchFriesHeading.textContent = 'FrenchFries';
    frenchFries.appendChild(frenchFriesHeading);

    const frenchFriesPara = document.createElement('p');
    frenchFriesPara.classList.add('frenchFriesPara');
    frenchFriesPara.textContent = 'french fries french fries french fries french fries french fries french fries french fries french fries french fries french fries french fries french fries ';
    frenchFries.appendChild(frenchFriesPara);

    const frenchFriesPrice = document.createElement('h3');
    frenchFriesPrice.classList.add('frenchFriesPrice');
    frenchFriesPrice.textContent = '$3.50';
    frenchFries.appendChild(frenchFriesPrice);

    const myFrenchFriesPic = new Image();
    myFrenchFriesPic.src = frenchFriesPic;
    myFrenchFriesPic.classList.add('myFrenchFriesPic')
    frenchFries.appendChild(myFrenchFriesPic);

    

}

export {menuCreate,}