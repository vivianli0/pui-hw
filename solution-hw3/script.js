/* 
 basePrice = 2.49
 finalPrice = (basePrice + glazingPrice) * packPrice 
 update triggered by user changing their selections


 elements
 - make object for glazing change
 - make object for size change
 - populate options in js
 - function to calculate final price  
 - when selection changes, final price updates

*/ 

let finalPrice;

// add function wrapper to preserve context for passing object method as event handler
// thx ChatGPT for explaining why I can't pass it directly without getting reference error!
window.addEventListener('load', function() {
    glazingOptions.populate();
});

window.addEventListener('load', function() {
    sizeOptions.populate(); 
});

// OBJECT 
const glazingOptions = {
    options: ['Original', 'Sugar milk', 'Vanilla milk', 'Double chocolate'],
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
    }, 
    
    // get current selection (price adaption)
    price: function(){
        const selection = parseInt(document.getElementById('size').value, 10);
        return selection;
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
    }, 

    // get current selection (price adaption)
    price: function(){
        const selection = parseInt(document.getElementById('size').value, 10);
        return selection;
    }
}

// onclick --> selection change
function glazingChange(element) {
    const priceChange = element.value
}

function sizeChange(element) {
    const sizeChange = element.value
}
