
// database for product details

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// create empty cart array
const cart = [];

// get query string from URL (search parameters)
const queryString = window.location.search; 
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// update product name, image, price
const productName = document.getElementById('title');
productName.innerText = rollType + ' Cinnamon Roll';

const productImage = document.getElementById('productImg');
productImage.src = "../assets/products/" + rolls[rollType].imageFile;

const productPrice = document.getElementById('js-price');
productPrice.innerText = rolls[rollType].basePrice;

// roll constructor
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// create new roll object & add to array
function updateCart() {

    // get user selections
    const glazingIndex = document.getElementById('glazing').options.selectedIndex; 
    const rollGlazing = document.getElementById('glazing').options[glazingIndex].innerHTML;
    const sizeIndex = document.getElementById('size').options.selectedIndex; 
    const packSize = document.getElementById('size').options[sizeIndex].innerHTML;
    const basePrice = rolls[rollType].basePrice;

    // shows what is in the cart
    const update = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(update);
    console.log(cart);
}

// event listener
const addBtn = document.getElementById('add-to-cart');
addBtn.addEventListener('click', updateCart);







