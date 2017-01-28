// The shopping cart should have the following functionality to:

// Remain hidden until at least one item has been added

// Toggle between showing and hiding the shopping cart by using a button

// Add items to the shopping cart

// Remove items from the shopping cart

// Change the quantity of an item. A quantity of 0 will remove the item from the cart.

// Give a Total Price calculation that updates when items are added or removed. All prices should be kept within an object and referred to for each calculation.

// Allow coupons/promo codes on total prices as well as on individual items. Make up your own promo codes, such as “BIGSALE” or the like

// Add a promo code for 10% off one item, 15% off all items of a specific type, and 5% off the total order

// Only apply 1 promo code at a time

// Only apply a promo code if it makes the total price less than the total price with the current promo code

// forEach function to iterate over nodeLists. 
var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

// Element variables
var basketWrapper = document.querySelector('.basket-container');
var basketBtn = document.querySelector('.shopping-basket'),
basketDropDown = document.querySelector('.basket-dropdown'),
basketItems = document.querySelector('.basket-items'),
addItem = document.getElementsByClassName('add-item'),
quantityCount = document.querySelector('.quantity-count'),
productCaption = document.querySelectorAll('[data-caption]'),

addCount,
dataCaption,
dataPrice;

//************************************************//

// Shopping cart individaul item HTML fragment to append to basketDropDown. Once I know templating, this rediculous HTML fragment will go the way of the dodo!

  
// Create elements outside of event.





//************************************************//
  
  


// Show and hide the basket dropdown when shopping bag is clicked.
basketBtn.addEventListener('click', function(ev) {
  ev.preventDefault();

  basketDropDown.classList.toggle('visible');
  console.log("Click fired");
}, false);

// Add shopping item to basket when add-item cart icon clicked.
forEach(addItem, function(index, elem) {
  basketCount = 0;
  elem.addEventListener('click', function(ev) {
    ev.preventDefault();

    var itemLi = document.createElement('li');
    // Create span for where the product caption goes.
    var captionSpan = document.createElement('span');
    captionSpan.className = "basket-product-caption";
    // Create the span where the item price goes.
    var priceSpan = document.createElement('span');
    priceSpan.className = "price";
    // Create the input with changeable item amounts.
    var amountInput = document.createElement('input');
    amountInput.setAttribute('type','text'),
    amountInput.setAttribute('value', '1'),
    amountInput.setAttribute('name', 'amount'),
    amountInput.className = "amount clearfix",
    amountInput.id = "amount";
    // Create remove button
    var removeBtn = document.createElement('input');
    removeBtn.setAttribute('type', 'button'),
    removeBtn.setAttribute('name', 'remove'),
    removeBtn.setAttribute('value', 'REMOVE'),
    removeBtn.className = "remove";
    // Create bottom bar for stylistic purposes.
    var bottomBarDiv = document.createElement('div');
    bottomBarDiv.className = "bottom-bar clearfix";
    // Append each element to itemLi
    itemLi.appendChild(captionSpan);
    itemLi.appendChild(priceSpan);
    itemLi.appendChild(amountInput),
    itemLi.appendChild(removeBtn),
    itemLi.appendChild(bottomBarDiv);
    // Walk up the DOM to grab the product listing.
    dataCaption = this.parentElement.previousElementSibling.previousElementSibling.lastElementChild.dataset.caption;
    // Walk up the DOM to grab the product price.
    dataPrice = this.previousElementSibling.dataset.price;
    // Add the product listing and product price to basket item.
    captionSpan.innerHTML = dataCaption;
    priceSpan.innerHTML = "$"+ dataPrice +".00";
    // Append itemLi HTML fragment to baskeItems ol
    basketItems.appendChild(itemLi);

    // Count up one each time the basket icon is clicked.
    basketCount = basketCount + 1;
    // quantityCount circle will also animate on each click. Briefly flashing and enlargin with the same pink as is in the add-item button. I need to figure that shit out still:)
    // Add quantiy to basket quantiy amount circle.
    quantityCount.innerHTML = basketCount;
    console.log(captionSpan);
    console.log(dataCaption);
    
  }, false);
});












