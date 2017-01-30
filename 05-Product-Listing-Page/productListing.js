// The shopping cart should have the following functionality to:





// 5. Change the quantity of an item. A quantity of 0 will remove the item from the cart.
// 6. Give a Total Price calculation that updates when items are added or removed. All prices should be kept within an object and referred to for each calculation.
// 7. Allow coupons/promo codes on total prices as well as on individual items. Make up your own promo codes, such as “BIGSALE” or the like
// 8. Add a promo code for 10% off one item, 15% off all items of a specific type, and 5% off the total order
  // 9Only apply 1 promo code at a time
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
itemAmount = document.getElementsByClassName('amount');

// 2. Toggle between showing and hiding the shopping cart by using a button
    // Shopping cart individaul item HTML fragment to append to basketDropDown. Once I know templating, this rediculous HTML fragment will go the way of the dodo!

//*********************HTML FRAGMENT*********************//
function basketFragment(caption,price) {
  var itemLi = document.createElement('li');
      captionSpan = document.createElement('span'),
      priceSpan = document.createElement('span'),
      amountInput = document.createElement('input'),
      removeBtnElem = document.createElement('input'),
      bottomBarDiv = document.createElement('div');

  captionSpan.className = "basket-product-caption";

  priceSpan.className = "price";
   
  amountInput.setAttribute('type','tel');
  amountInput.setAttribute('value', '1');
  amountInput.setAttribute('name', 'amount');
  amountInput.className = "amount clearfix";
  amountInput.id = "amount";
   
  removeBtnElem.setAttribute('type', 'button');
  removeBtnElem.setAttribute('name', 'remove');
  removeBtnElem.setAttribute('value', 'REMOVE');
  removeBtnElem.className = "remove";
   
  bottomBarDiv.className = "bottom-bar clearfix";

  itemLi.appendChild(captionSpan);
  itemLi.appendChild(priceSpan);
  itemLi.appendChild(amountInput);
  itemLi.appendChild(removeBtnElem);
  itemLi.appendChild(bottomBarDiv);

  // Add the product listing and product price to basket item.
  captionSpan.innerHTML = caption;
  priceSpan.innerHTML = "$"+ price +".00";

  return itemLi;

};
 //*********************HTML FRAGMENT*********************//

basketBtn.addEventListener('click', function(ev) {
  ev.preventDefault();

  basketDropDown.classList.toggle('visible');
}, false);

// 3. Add items to the shopping cart
forEach(addItem, function(index, elem) {
  
  elem.addEventListener('click', function(ev) {
    ev.preventDefault();

    // Walk up the DOM to grab the product listing.
    dataCaption = this.parentElement.previousElementSibling.previousElementSibling.lastElementChild.dataset.caption;
    // Walk up the DOM to grab the product price.
    dataPrice = this.previousElementSibling.dataset.price;
    
    // Append itemLi HTML fragment to baskeItems ol
    basketItems.appendChild(basketFragment(dataCaption, dataPrice));

    // 1. Remain hidden until at least one item has been added
    basketWrapper.classList.add('display');
    
    // quantityCount circle will also animate on each click. Briefly flashing and enlargin with the same pink as is in the add-item button. I need to figure that shit out still:)

    // Add quantiy to basket quantiy amount circle.
    quantityCount.innerHTML = basketItems.childElementCount;
    

    if ( basketItems.childElementCount >= 0) {
      forEach(removeBtn, function(index, elem) {
        elem.addEventListener('click', function(ev) {
          ev.preventDefault();
          this.parentElement.remove();
          quantityCount.innerHTML = basketItems.childElementCount;
          
          if (basketItems.childElementCount === 0) {
            basketWrapper.classList.remove('display');
          } 
        }, false);
      });
      forEach(itemAmount, function(index, elem) {
        elem.addEventListener('input', function(ev) {
          ev.preventDefault();

          if (this.value ==='0') {
            this.parentElement.remove();
            quantityCount.innerHTML = basketItems.childElementCount;
          }
          if (basketItems.childElementCount === 0) {
            basketWrapper.classList.remove('display');
          } 
        }, false);
      });
    } 

  }, false);
});


// 4. Remove items from the shopping cart











