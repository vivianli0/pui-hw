// HW3: objects for populating glazing & size options in <select> tag

const glazingOptions = {
    options: ['Keep Original', 'Sugar milk', 'Vanilla milk', 'Double chocolate'],
    adaptations: [0, 0, 0.5, 1.5],
    populate: function(){
        const select = document.getElementById('glazing');
        for (let i = 0; i < this.options.length; i++) {
            const opt = document.createElement('option');
            opt.value = this.adaptations[i];
            opt.innerHTML = this.options[i]; 
            select.appendChild(opt);
        }
    }
}

const sizeOptions = {
    options: [1, 3, 6, 12],
    adaptations: [1, 3, 5, 10],
    populate: function(){
        const select = document.getElementById('size');
        for (let i = 0; i < this.options.length; i++) {
            const opt = document.createElement('option');
            opt.value = this.adaptations[i];
            opt.innerHTML = this.options[i]; 
            select.appendChild(opt);
        }
    } 
}

glazingOptions.populate();
sizeOptions.populate();

////////////////////////HW4////////////////////////

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
productPrice.innerText = "$ " + rolls[rollType].basePrice;

// create new roll object & add to array
// constructor 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// push new roll object to array
function updateCart() {

    // get user selections
    const glazingIndex = document.getElementById('glazing').options.selectedIndex; 
    const rollGlazing = document.getElementById('glazing').options[glazingIndex].innerHTML;
    const sizeIndex = document.getElementById('size').options.selectedIndex; 
    const packSize = document.getElementById('size').options[sizeIndex].innerHTML;
    const basePrice = rolls[rollType].basePrice;

    // print contents in cart
    const update = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(update);
    console.log(cart);
}

// event listener
const addBtn = document.getElementById('add-to-cart');
addBtn.addEventListener('click', updateCart);


// HW4 update: access base price from JSON
const basePrice = parseFloat(rolls[rollType].basePrice);

////////////////////////HW3////////////////////////
// access DOM
const displayPrice = document.getElementById('js-price');
// float precision
const precision = 2; 

function glazingChange(element) {
    const glazingPrice = parseFloat(element.value);
    const packPrice = parseFloat(document.getElementById('size').value);
    const finalPrice = (basePrice + glazingPrice) * packPrice;
    displayPrice.innerHTML = '$ ' + finalPrice.toFixed(precision);
}

function sizeChange(element) {
    const glazingPrice = parseFloat(document.getElementById('glazing').value);
    const packPrice = parseFloat(element.value);
    const finalPrice = (basePrice + glazingPrice) * packPrice;
    displayPrice.innerHTML = '$ ' + finalPrice.toFixed(precision);
}