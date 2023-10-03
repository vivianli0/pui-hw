// initiative shopping cart
let cart = [];

// define Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
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
    price.innerHTML = "<br> $" + item.basePrice;
}

for (let i = 0; i < cart.length; i++) {
    createElement(cart[i]);
}



