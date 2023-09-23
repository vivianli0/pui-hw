
// OBJECT 
const glazingOptions = {
    options: ['Keep Original', 'Sugar milk', 'Vanilla milk', 'Double chocolate'],
    adaptions: [0, 0, 0.5, 1.5],

    // adding options dynamically
    populate: function(){
        const select = document.getElementById('glazing');
        for (let i = 0; i < this.options.length; i++) {
            const opt = document.createElement('option');
            opt.value = this.adaptions[i];
            opt.innerHTML = this.options[i]; 
            select.appendChild(opt);
        }
    }
}

// OBJECT 
const sizeOptions = {
    options: [1, 3, 6, 12],
    adaptions: [1, 3, 5, 10],

    // adding options dynamically
    populate: function(){
        const select = document.getElementById('size');
        for (let i = 0; i < this.options.length; i++) {
            const opt = document.createElement('option');
            opt.value = this.adaptions[i];
            opt.innerHTML = this.options[i]; 
            select.appendChild(opt);
        }
    } 
}

// populate select options
glazingOptions.populate();
sizeOptions.populate();


// CALCULATE FINAL PRICE
const basePrice = 2.49;
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