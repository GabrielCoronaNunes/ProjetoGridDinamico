const optionButtons = document.querySelectorAll('.option-button');
const buyButton = document.getElementById('buy-button');
const decrementButton = document.getElementById('decrement-button');
const incrementButton = document.getElementById('increment-button')
const priceDisplay = document.getElementById('price-display');
const quantityDisplay = document.getElementById('quantity-display');
const slider = document.getElementById("slider");
let selectedOptionValue = 0;
let selectedQuantity = 1;
let selectedUrl = "";



optionButtons.forEach(function(button) {
button.addEventListener('click', function() {
    selectedOptionValue = Number(button.getAttribute('data-value'));
    selectedUrl = button.getAttribute('data-url');
    updatePrice();
});
});


decrementButton.addEventListener('click', function(){
    if (selectedQuantity > 1) {
        selectedQuantity--;
        updatePrice();
        updateQuantity();
        updateSlider();

    }
});

incrementButton.addEventListener('click', function() {
    if (selectedQuantity < 10) {
        selectedQuantity++;
        updatePrice();
        updateQuantity();
        updateSlider();
    }
});

slider.addEventListener("input", function(){
    selectedQuantity = slider.value;
    updatePrice();
    updateQuantity();
    
});



buyButton.addEventListener('click', function() {
    window.location.href = selectedUrl;
});

function updatePrice() {
    const totalPrice = selectedQuantity * selectedOptionValue
    priceDisplay.innerHTML = '$' + totalPrice;
};

function updateQuantity() {
    quantityDisplay.innerHTML = selectedQuantity;
  };


  function updateSlider(){
    slider.value = selectedQuantity;
  }


