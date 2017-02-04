// 7. Allow coupons/promo codes on total prices as well as on individual items. Make up your own promo codes, such as “BIGSALE” or the like
// 8. Add a promo code for 10% off one item, 15% off all items of a specific type, and 5% off the total order
  // Only apply 1 promo code at a time
// 9. Only apply a promo code if it makes the total price less than the total price with the current promo code

// forEach function to iterate over nodeLists. 
var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};

// Element variables
var basketWrapper = document.querySelector('.basket-wrapper'),
basket = document.querySelector('.basket'),
basketBtn = document.querySelector('.shopping-basket'),
basketDropDown = document.querySelector('.basket-dropdown'),
quantityCount = document.querySelector('.quantity-count'),
productCaption = document.querySelectorAll('[data-caption]'),
basketItems = document.querySelector('.basket-items'),
removeBtn = document.getElementsByClassName('remove'),
addItem = document.getElementsByClassName('add-item'),
itemAmount = document.getElementsByClassName('amount'),
basketPrice = document.getElementsByClassName('basket-price'),
totalPrice = document.querySelector('.total-price'),
total = 0,
allPricesInBasket = {};


// 2. Toggle between showing and hiding the shopping cart by using a button
    // Shopping cart individaul item HTML fragment to append to basketDropDown. Once I know templating, this rediculous HTML fragment will go the way of the dodo!

//*********************HTML FRAGMENT*********************//
function basketFragment(caption,price) {
  var itemLi = document.createElement('li');
      captionSpan = document.createElement('span'),
      priceSpan = document.createElement('span'),
      amountInput = document.createElement('input'),
      couponInput = document.createElement('input'),
      removeBtnElem = document.createElement('input'),
      bottomBarDiv = document.createElement('div');

  captionSpan.className = "basket-product-caption",
  captionSpan.setAttribute('data-basketcaption', caption);

  priceSpan.className = "basket-price",
  priceSpan.setAttribute('data-basketprice', price);
   
  amountInput.setAttribute('type','tel');
  amountInput.setAttribute('value', '1');
  amountInput.setAttribute('name', 'amount');
  amountInput.className = "amount clearfix";
  amountInput.id = "amount";

  removeBtnElem.setAttribute('type', 'button');
  removeBtnElem.setAttribute('name', 'remove');
  removeBtnElem.setAttribute('value', 'REMOVE');
  removeBtnElem.className = "remove";
   
  couponInput.setAttribute('type', 'text');
  couponInput.setAttribute('name', 'coupon');
  couponInput.setAttribute('placeholder', 'COUPON')
  couponInput.className = "coupon clearfix";

  bottomBarDiv.className = "bottom-bar clearfix";

  itemLi.appendChild(captionSpan);
  itemLi.appendChild(priceSpan);
  itemLi.appendChild(amountInput);
  itemLi.appendChild(removeBtnElem);
  itemLi.appendChild(couponInput);
  itemLi.appendChild(bottomBarDiv);

  // Add the product listing and product price to basket item.
  captionSpan.innerHTML = caption;
  priceSpan.innerHTML = "$"+ price;

  return itemLi;
};

function totalObject(obj) {
  for (var prop in obj) {
    total = total + parseFloat(allPricesInBasket[prop]);
  }
  totalPrice.innerHTML = "$"+ total.toString();
  total = 0;
}

basketBtn.addEventListener('click', function(ev) {
  ev.preventDefault();

  basketDropDown.classList.toggle('visible');
}, false);

// 3. Add items to the shopping cart
forEach(addItem, function(index, elem) {
  
  elem.addEventListener('click', function(ev) {
    ev.preventDefault();

    // Walk up the DOM to grab the product listing.
    itemCaption = this.parentElement.previousElementSibling.previousElementSibling.lastElementChild.dataset.caption;
    // Walk up the DOM to grab the product price.
    itemPrice = this.previousElementSibling.dataset.itemprice;
    
    // Append itemLi HTML fragment to baskeItems ol
    basketItems.insertAdjacentElement('afterbegin',basketFragment(itemCaption, itemPrice));

    // 1. Remain hidden until at least one item has been added
    basketWrapper.classList.add('display');
    
    // quantityCount circle will also animate on each click. Briefly flashing and enlargin with the same pink as is in the add-item button. I need to figure that shit out still:)

    // Add quantiy to basket quantiy amount circle.
    quantityCount.innerHTML = basketItems.childElementCount;
    
    // Set the property of the price object to the item caption and value to the item price when they are first added to the basket.
    allPricesInBasket[itemCaption] = itemPrice;
    totalObject(allPricesInBasket);

    // Remove items from the shopping cart. Close shopping cart if no items.
    if ( basketItems.childElementCount >= 0) {
      
      forEach(removeBtn, function(index, elem) {
        elem.addEventListener('click', function(ev) {
          ev.preventDefault();
          this.parentElement.remove();
          quantityCount.innerHTML = basketItems.childElementCount;
          
          delete allPricesInBasket[this.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];
          totalObject(allPricesInBasket);

          if (basketItems.childElementCount === 0) {
            basketWrapper.classList.remove('display');
          } 
        }, false);
      });

      // 5. Change the quantity of an item. A quantity of 0 will remove the item from the cart.
      forEach(itemAmount, function(index, elem) {

        elem.addEventListener('input', function(ev) {
          ev.preventDefault();
          
          // Quantity of each item multiplied by cost of item.
          this.previousElementSibling.innerHTML = "$"+ this.value * this.previousElementSibling.getAttribute('data-basketprice');
          
          // Remove the item from the basket if quantity entered is 0.
          if (this.value ==='0') {
            this.parentElement.remove();
            quantityCount.innerHTML = basketItems.childElementCount;
            // Remove item from total prices object.
            delete allPricesInBasket[this.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];
            // Update total.
            totalObject(allPricesInBasket);
          }
          
          // Adjust the value in the prices object if amount is greater than 1.
          if (this.value >= "1") {
            allPricesInBasket[this.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')] = this.previousElementSibling.innerHTML.replace('$', '');
            totalObject(allPricesInBasket);
          }
          
          // Close the basket if there are no items in it.
          if (basketItems.childElementCount === 0) {
            basketWrapper.classList.remove('display');
          } 
        }, false);
      });
    } 
  }, false);
});



 








