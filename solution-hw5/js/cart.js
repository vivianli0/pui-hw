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

// make 4 new objects
// base price??
const item1 = new Roll("Original", "Sugar Milk", 1, 2.49);
const item2 = new Roll("Walnut", "Vanilla Milk", 12, 2.49);
const item3 = new Roll("Raisin", "Sugar Milk", 3, 2.49);
const item4 = new Roll("Apple", "Original", 3, 2.49);

// 