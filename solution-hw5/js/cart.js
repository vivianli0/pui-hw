// initiative shopping cart
let cart = [];
// for calculating final price
let priceList = [];

// define Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// for calculating item price
// I know it's better to reference the objects in main.js
// but I didn't want to go back and change the entire code
// because my adaptations are in arrays --> something on my to-do list 
const precision = 2;
const priceAdjust = {

    size: {
        1: 1,
        3: 3, 
        6: 5, 
        12: 10
    },

    glazing: {
        "Original": 0,
        "Sugar Milk": 0,
        "Vanilla Milk": 0.5,
        "Double Chocolate": 1.5
    }
}

// add new roll to cart
function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(roll);
    return cart;
}

addNewRoll("Original", "Sugar Milk", 1, rolls.Original.basePrice);
addNewRoll("Walnut", "Vanilla Milk", 12, rolls.Walnut.basePrice);
addNewRoll("Raisin", "Sugar Milk", 3, rolls.Raisin.basePrice);
addNewRoll("Apple", "Original", 3, rolls.Apple.basePrice);


// display cart items, update & delete   
// REMEMBER! this function is for each item, then iterate w/ for loop through the cart array
function createElement(item) {
    // clone template
    const template = document.querySelector("#cart-template");
    const clone = template.content.cloneNode(true);

    // add element property to item
    item.element = clone.querySelector(".cart-item"); 

    // add items to DOM
    const cartList = document.querySelector(".cart-list");
    cartList.prepend(item.element);

    // populate
    updateElement(item);

    // delete button 
    const deleteBtn = item.element.querySelector(".remove-btn");
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => {
        deleteItem(item);
    })
}

function updateElement(item) {
    // get HTML elements that need updating 
    const image = item.element.querySelector(".cart-img");
    const type = item.element.querySelector(".type");
    const glazing = item.element.querySelector(".glazing");
    const size = item.element.querySelector(".size");
    const price = item.element.querySelector(".price");
    
    // update content
    image.src = "../assets/products/" + rolls[item.type].imageFile;
    type.innerText = item.type + " Cinnamon Roll";
    glazing.innerText = "Glazing: " + item.glazing;
    size.innerText = "Pack Size: " + item.size;
    const totalPrice = (item.basePrice + priceAdjust.glazing[item.glazing]) * priceAdjust.size[item.size];
    price.innerHTML = "<br> $" + totalPrice.toFixed(precision);

    // add to price list array
    priceList.push(totalPrice.toFixed(precision));

    // proof reading 
    //console.log(item.basePrice + ' + ' + priceAdjust.glazing[item.glazing] + ' x ' + priceAdjust.size[item.size] + ' = ' + totalPrice.toFixed(precision));
}

function deleteItem(item) {
    item.element.remove();
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    priceList.splice(index, 1);

    updateFinalPrice();
}

function updateFinalPrice() {
    let total = 0;
    for (let i = 0; i < priceList.length; i++) {
    total += parseFloat(priceList[i]);
    }

    let element = document.querySelector('.num'); 
    element.innerText = "$" + total.toFixed(precision);
}

// let's goooo!
for (let i = 0; i < cart.length; i++) {
    createElement(cart[i]);
    updateFinalPrice();
}






