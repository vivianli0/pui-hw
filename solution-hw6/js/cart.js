let cart = [];
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
const precision = 2;
const priceAdjust = {

    size: {
        1: 1,
        3: 3, 
        6: 5, 
        12: 10
    },

    glazing: {
        "Keep original": 0,
        "Sugar milk": 0,
        "Vanilla milk": 0.5,
        "Double chocolate": 1.5
    }
}

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
}

function deleteItem(item) {
    item.element.remove();
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    priceList.splice(index, 1);
    updateFinalPrice();

    // HW6: save updated cart to local storage
    const updatedCart = Array.from(cart);
    const updatedCartString = JSON.stringify(updatedCart);
    localStorage.clear();
    localStorage.setItem('storedRolls', updatedCartString);
    console.log(localStorage.getItem('storedRolls'));
}

function updateFinalPrice() {
    let total = 0;
    for (let i = 0; i < priceList.length; i++) {
    total += parseFloat(priceList[i]);
    }

    let element = document.querySelector('.num'); 
    element.innerText = "$" + total.toFixed(precision);
}


////////////////////////HW6////////////////////////

// retrieve cart from local storage
function retrieveFromLocalStorage() {
    const localCartString = localStorage.getItem('storedRolls');
    const localCart = JSON.parse(localCartString);
    for (const rollData of localCart) {
        const roll = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
        cart.push(roll);
    }
}

retrieveFromLocalStorage();

// populate DOM with items in current cart
for (let i = 0; i < cart.length; i++) {
    createElement(cart[i]);
    updateFinalPrice();
}



