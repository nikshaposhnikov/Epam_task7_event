'use strict'
var menu = [];

var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg"
    , "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg"];
let buttonList = document.createElement("input",);
var ulList = document.createElement('ul');
var divTable = document.createElement('div');
divTable.style.className = 'divTable';
var headerTable = document.createElement('headerTable');
var nav = document.createElement('nav');

buttonList.type = "button";
buttonList.value = "Список";
let counterList = 0;
buttonList.onclick = () => {
    if (counterTable != 0) {
        while (headerTable.hasChildNodes()) {
            headerTable.removeChild(headerTable.firstChild);
        }
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        counterTable = 0;
    }
    if (counterList == 0) {
        counterList += 1;
        drawList();
    }
};
let counterTable = 0;
let buttonTable = document.createElement("input",);
buttonTable.type = "button";
buttonTable.value = "Сетка";
buttonTable.onclick = () => {
    if (counterList != 0) {
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        counterList = 0;
    }
    if (counterTable == 0) {
        counterTable += 1;
        drawTable(menu);
    }
};
nav.style.background = 'black';
document.body.style.background = '#F5F6CE';
buttonList.style.background = 'white';
buttonList.style.width = '50%';
buttonTable.style.width = '50%';
buttonTable.style.background = 'white';

nav.appendChild(buttonList);
nav.appendChild(buttonTable);
content.appendChild(nav);
let pizza = new Pizza("Margarita", ['сыр', 'ветчина', 'грибы'], 850, 120);
menu.push(pizza);
let pizza2 = new Pizza("Bomba", ["сыр"], 700, 100);
menu.push(pizza2);
let pizza3 = new Pizza("Tasty", ['сыр', 'грибы'], 650, 99);
menu.push(pizza3);
let pizza4 = new Pizza("Full", ["ветчина"], 820, 112);
menu.push(pizza4);
let pizza5 = new Pizza("Origin", ['сыр', 'помидоры', 'ветчина'], 950, 125);
menu.push(pizza5);
let pizza6 = new Pizza("Best", ['сыр', 'помидоры', 'ветчина', 'грибы'], 1000, 118);
menu.push(pizza6);
let pizza7 = new Pizza("pizza", ['ветчина', 'грибы'], 870, 130);
menu.push(pizza7);
let pizza8 = new Pizza("Cool", ['салями', 'сыр', 'помидоры'], 870, 100);
menu.push(pizza8);
let pizza9 = new Pizza("Mister", ['сыр', 'салями', 'ветчина'], 950, 101);
menu.push(pizza9);
let pizza10 = new Pizza("Miss", ['сыр', 'помидоры', 'салями'], 730, 100);
menu.push(pizza10);
let pizza11 = new Pizza("for girls", ['грибы', 'салями', 'ветчина'], 680, 115);
menu.push(pizza11);
let pizza12 = new Pizza("for boys", ['сыр', 'помидоры', 'ветчина', 'грибы'], 870, 90);
menu.push(pizza12);
let pizza13 = new Pizza("soccer", ['сыр', 'помидоры', 'салями', 'грибы'], 900, 98);
menu.push(pizza13);
let pizza14 = new Pizza("goal", ["помидоры"], 620, 85);
menu.push(pizza14);
let pizza15 = new Pizza("Keeper", ["салями"], 500, 100);
menu.push(pizza15);
let pizza16 = new Pizza("Exist", ['сыр', 'помидоры'], 570, 105);
menu.push(pizza16);

var compositionPizza = ["сыр", "помидоры", "салями", "ветчина", "грибы"];

function Pizza(name, composition, calories, price) {
    this.name = name;
    this.composition = composition;
    this.calories = calories;
    this.price = price;
}


function drawList() {
    document.body.appendChild(ulList);
    ulList.style.font = '14px "Trebuchet MS", "Lucida Sans"';
    createSortingList();
    for (let i = 0; i < menu.length; i++) {
        let div = document.createElement('div');
        let li = document.createElement('li');
        let logo = document.createElement('img');
        li.style.padding = '.4em .4em .4em 2em';
        li.style.margin = '.5em 0';
        li.style.background = '#DAD2CA';
        li.style.borderRadius = '.3em';
        logo.src = "img/logo.png";
        logo.style.width = '30px';
        logo.style.height = '30px';
        logo.style.marginRight = '.4em';
        li.style.listStyleType = "none";
        li.style.marginBottom = '10px';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.appendChild(logo);
        div.appendChild(document.createTextNode(menu[i].name + ', ' + menu[i].price + 'грн' + ', ' + menu[i].calories + 'ккал'));
        li.appendChild(div);
        ulList.appendChild(li);
    }
}

let idForChangePrice = document.createElement('div');

function drawTable(menuArr, counterForFilter) {
    headerTable.style.display = "flex";
    headerTable.style.flexWrap = "wrap";
    document.body.appendChild(headerTable);
    divTable.style.display = "flex";
    divTable.style.flexWrap = "wrap";
    document.body.appendChild(divTable);
    if (counterForFilter == undefined) {
        createSorting();
        createFilter();
    }
    for (let i = 0; i < menuArr.length; i++) {
        let card = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('div');
        let composition = document.createElement('p');
        let calories = document.createElement('div');
        let price = document.createElement('div');
        card.style.display = "flex";
        card.style.className = 'cardPizza';
        price.style.className = 'pricePizza';
        card.style.flexDirection = "column";
        card.style.minWidth = '30%';
        card.style.margin = '10px';
        card.style.paddingLeft = '5px';
        card.style.justifyContent = 'space-around';
        logo.src = images[i];
        logo.style.width = '40%';
        logo.style.margin = 'auto';
        logo.style.paddingTop = '5px';
        card.style.border = '2px solid black';
        composition.style.display = "flex";
        card.appendChild(logo);
        name.appendChild(document.createTextNode("Название: " + menuArr[i].name));
        composition.appendChild(document.createTextNode("Состав: "));
        for (let a = 0; a < menuArr[i].composition.length; a++) {
            let compos = document.createElement('div');
            /*idForChangePrice.style.opacity = '0.1';
            idForChangePrice+=i;
            idForChangePrice.appendChild(document.createTextNode(String(i)));
            compos.appendChild(document.createTextNode(String(i)));*/
            compos.appendChild(document.createTextNode(menuArr[i].composition[a] + ', '));
            composition.appendChild(compos);
            compos.addEventListener("click", changeCompositionClick);
        }
        calories.appendChild(document.createTextNode("Калории: " + menuArr[i].calories));
        price.appendChild(document.createTextNode("Цена: " + menuArr[i].price + "грн"));
        card.appendChild(name);
        card.appendChild(composition);
        card.appendChild(calories);
        card.appendChild(price);
        divTable.appendChild(card);
    }
}

let counterSortingCalories = 0;
let counterSortingPrice = 0;
let counterSorting = 0;

function createSorting() {
    let sortCalories = document.createElement("input",);
    sortCalories.type = "button";
    sortCalories.value = "Каллории";
    sortCalories.type = "button";
    sortCalories.value = "Каллории";
    sortCalories.style.width = '150px';
    sortCalories.style.height = '45px';
    sortCalories.style.lineHeight = ' 45px';
    sortCalories.style.borderRadius = '45px';
    sortCalories.style.margin = ' 10px 20px';
    sortCalories.style.fontFamily = 'Montserrat,sans-serif';
    sortCalories.style.fontSize = ' 11px';
    sortCalories.style.textTransform = ' uppercase';
    sortCalories.style.textAlign = ' center';
    sortCalories.style.letterSpacing = ' 3px';
    sortCalories.style.fontWeight = ' 600';
    sortCalories.style.color = ' #524f4e';
    sortCalories.style.background = ' white';
    sortCalories.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortCalories.onclick = () => {
        if (counterSortingCalories == 0) {
            menu.sort(compareCaloriesTop);
            counterSortingCalories += 1;
        } else {
            menu.sort(compareCaloriesBottom);
            counterSortingCalories = 0;
        }
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        ;drawTable(menu, counterSorting);
    };
    headerTable.appendChild(sortCalories);
    let sortPrice = document.createElement("input",);
    sortPrice.type = "button";
    sortPrice.value = "Цена";
    sortPrice.style.width = '150px';
    sortPrice.style.height = '45px';
    sortPrice.style.lineHeight = ' 45px';
    sortPrice.style.borderRadius = '45px';
    sortPrice.style.margin = ' 10px 20px';
    sortPrice.style.fontFamily = 'Montserrat,sans-serif';
    sortPrice.style.fontSize = ' 11px';
    sortPrice.style.textTransform = ' uppercase';
    sortPrice.style.textAlign = ' center';
    sortPrice.style.letterSpacing = ' 3px';
    sortPrice.style.fontWeight = ' 600';
    sortPrice.style.color = ' #524f4e';
    sortPrice.style.background = ' white';
    sortPrice.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortPrice.onclick = () => {
        if (counterSortingPrice == 0) {
            menu.sort(comparePriceTop);
            counterSortingPrice += 1;
        } else {
            menu.sort(comparePriceBottom);
            counterSortingPrice = 0;
        }
        while (divTable.hasChildNodes()) {
            divTable.removeChild(divTable.firstChild);
        }
        ;drawTable(menu, counterSorting);
    };
    headerTable.appendChild(sortPrice);
}

function createSortingList() {
    let sortCalories = document.createElement("input",);
    sortCalories.type = "button";
    sortCalories.value = "Каллории";
    sortCalories.style.width = '150px';
    sortCalories.style.height = '45px';
    sortCalories.style.lineHeight = ' 45px';
    sortCalories.style.borderRadius = '45px';
    sortCalories.style.margin = ' 10px 20px';
    sortCalories.style.fontFamily = 'Montserrat,sans-serif';
    sortCalories.style.fontSize = ' 11px';
    sortCalories.style.textTransform = ' uppercase';
    sortCalories.style.textAlign = ' center';
    sortCalories.style.letterSpacing = ' 3px';
    sortCalories.style.fontWeight = ' 600';
    sortCalories.style.color = ' #524f4e';
    sortCalories.style.background = ' white';
    sortCalories.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortCalories.onclick = () => {
        if (counterSortingCalories == 0) {
            menu.sort(compareCaloriesTop);
            counterSortingCalories += 1;
        } else {
            menu.sort(compareCaloriesBottom);
            counterSortingCalories = 0;
        }
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        ;drawList();
    };

    ulList.appendChild(sortCalories);
    let sortPrice = document.createElement("input",);
    sortPrice.type = "button";
    sortPrice.value = "Цена";
    sortPrice.style.width = '150px';
    sortPrice.style.height = '45px';
    sortPrice.style.lineHeight = ' 45px';
    sortPrice.style.borderRadius = '45px';
    sortPrice.style.margin = ' 10px 20px';
    sortPrice.style.fontFamily = 'Montserrat,sans-serif';
    sortPrice.style.fontSize = ' 11px';
    sortPrice.style.textTransform = ' uppercase';
    sortPrice.style.textAlign = ' center';
    sortPrice.style.letterSpacing = ' 3px';
    sortPrice.style.fontWeight = ' 600';
    sortPrice.style.color = ' #524f4e';
    sortPrice.style.background = ' white';
    sortPrice.style.boxShadow = ' 0 8px 15px rgba(0,0,0,.1)';
    sortPrice.onclick = () => {
        if (counterSortingPrice == 0) {
            menu.sort(comparePriceTop);
            counterSortingPrice += 1;
        } else {
            menu.sort(comparePriceBottom);
            counterSortingPrice = 0;
        }
        while (ulList.hasChildNodes()) {
            ulList.removeChild(ulList.firstChild);
        }
        ;drawList();
    };
    ulList.appendChild(sortPrice);
}

function createFilter() {
    var formFilter = document.createElement('form');
    var formFilterContainer = document.createElement('div');
    formFilterContainer.style.display = 'flex';
    formFilterContainer.style.paddingTop = '25px';
    formFilter.id = 'formFilter';
    for (let i = 0; i < compositionPizza.length; i++) {
        var checkBox = document.createElement('input');
        let text = document.createElement('label');
        checkBox.type = 'checkbox';
        checkBox.value = compositionPizza[i];
        checkBox.id = 'checkbox' + i;
        text.style.fontFamily = 'Montserrat,sans-serif';
        text.style.fontSize = ' 20px';
        checkBox.style.marginRight = ' 30px';
        formFilterContainer.style.paddingTop = '25px';
        text.appendChild(document.createTextNode(compositionPizza[i]));
        formFilterContainer.appendChild(text);
        formFilterContainer.appendChild(checkBox);
        formFilter.appendChild(formFilterContainer);
        headerTable.appendChild(formFilter);
    }
    formFilter.addEventListener("click", filterOnClick);

}

let menuFiltered = [];
let counterFilter = 0;

function filterOnClick(e) {

    for (let i = 0; i < menu.length; i++) {
        if (menu[i].composition.indexOf(e.target.value) != -1 && e.target.checked == true) {
            menuFiltered.push(menu[i]);
        }
        if (e.target.checked == false) {
            menuFiltered = [];
            document.getElementById("checkbox0").checked = false;
            document.getElementById("checkbox1").checked = false;
            document.getElementById("checkbox2").checked = false;
            document.getElementById("checkbox3").checked = false;
            document.getElementById("checkbox4").checked = false;
        }
    }
    while (divTable.hasChildNodes()) {
        divTable.removeChild(divTable.firstChild);
    }
    let result = [];
    nextInput:
        for (let i = 0; i < menuFiltered.length; i++) {
            let str = menuFiltered[i].name;
            for (let j = 0; j < result.length; j++) {
                if (result[j].name == str) continue nextInput;
            }
            result.push(menuFiltered[i]);
        }
    drawTable(result, counterFilter);
}

function changeCompositionClick(e) {
        if (e.target.innerHTML.indexOf('сыр') != -1) {
            console.log("сыр");
        }
        if (e.target.innerHTML.indexOf('помидоры') != -1) {
            console.log("помидоры");
        }
        if (e.target.innerHTML.indexOf('ветчина') != -1) {
            console.log("ветчина");
        }
        if (e.target.innerHTML.indexOf('грибы') != -1) {
            console.log("грибы");
        }
        if (e.target.innerHTML.indexOf('салями') != -1) {
            console.log("салями");
            // let price =document.body.getElementsByClassName("pricePizza");
        }
    console.log(e.parentElement);

    /*  for (let i = 0; i < menu.length; i++) {
          if (e.target.innerHTML[0] == i) {
              arr[i].price= -1;
              console.log(arr[i].price);
              drawTable(arr,0);
          }*/
        e.target.style.textDecoration = 'line-through';
}


function comparePriceTop(pizzaA, pizzaB) {
    return pizzaA.price - pizzaB.price;
}

function comparePriceBottom(pizzaA, pizzaB) {
    return pizzaB.price - pizzaA.price;
}

function compareCaloriesTop(pizzaA, pizzaB) {
    return pizzaA.calories - pizzaB.calories;
}

function compareCaloriesBottom(pizzaA, pizzaB) {
    return pizzaB.calories - pizzaA.calories;
}

