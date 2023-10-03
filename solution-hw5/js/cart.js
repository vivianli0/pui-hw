// display four items 
// remove button removes item
// update total price

// initiative shopping cart
let cart = [];

// create Roll class
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

console.log(cart);

// display cart items   
function createElement(item) {
    // clone template
    const template = document.querySelector("#cart-template");
    const clone = template.content.cloneNode(true);

    // add element property to item
    item.element = clone.querySelector(".cart-item"); 
    const btnDelete = item.element.querySelector(".remove-btn");
    btnDelete.addEventListener("click", () => {
        deleteItem(item);
    })

    // add cart items to DOM
    const cartList = document.querySelector(".cart-list");
    console.log(item.element);
    console.log(cartList);
    cartList.prepend(item.element);

    // populate w/ content
    //updateElement(item);
}

function updateElement(item) {
    
}


for (let i = 0; i < cart.length; i++) {
    createElement(cart[i]);
}


