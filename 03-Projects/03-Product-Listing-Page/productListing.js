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
var basketContainer = document.querySelector('.basket__outerContainer'),
basket = document.querySelector('.basket'),
basketBtn = document.querySelector('.basket__icon'),
basketDropDown = document.querySelector('.basket__dropdown'),
totalQuantity = document.querySelector('.basket__totalQuantity'),
productCaption = document.querySelectorAll('[data-caption]'),
basketItems = document.querySelector('.basket__items'),
removeBtn = document.getElementsByClassName('basket__remove'),
addItem = document.getElementsByClassName('add-item'),
itemQuantity = document.getElementsByClassName('basket__itemQuantity'),
basketPrice = document.getElementsByClassName('basket__price'),
totalPrice = document.querySelector('.basket__total'),
total = 0,
allPricesInBasket = {},
allCouponsInBasket = {},
coupon = document.getElementsByClassName('basket__coupon'),
siteCoupon = document.getElementById('site-coupon'),
specialSale = "SPECIALSALE",
productSale = "ITEMAWESOME",
siteSale = "SITESALE",

updateBtn = document.querySelector('.update'),
checkoutBtn = document.getElementById('checkout');


// 2. Toggle between showing and hiding the shopping cart by using a button
    // Shopping cart individaul item HTML fragment to append to basketDropDown. Once I know templating, this rediculous HTML fragment will go the way of the dodo!

//*********************HTML FRAGMENT*********************//
function basketFragment(caption,price, specialClass) {
  var itemLi = document.createElement('li');
      captionSpan = document.createElement('span'),
      priceSpan = document.createElement('span'),
      amountInput = document.createElement('input'),
      couponInput = document.createElement('input'),
      removeBtnElem = document.createElement('input'),
      bottomBarDiv = document.createElement('div');

  itemLi.className = specialClass;

  captionSpan.className = "basket-product-caption",
  captionSpan.setAttribute('data-basketcaption', caption);

  priceSpan.className = "basket__price",
  priceSpan.setAttribute('data-basketprice', price);
   
  amountInput.setAttribute('type','tel');
  amountInput.setAttribute('value', '1');
  amountInput.setAttribute('name', 'amount');
  amountInput.className = "basket__itemQuantity clearfix";
  amountInput.id = "amount";

  removeBtnElem.setAttribute('type', 'button');
  removeBtnElem.setAttribute('name', 'remove');
  removeBtnElem.setAttribute('value', 'REMOVE');
  removeBtnElem.className = "basket__remove";
   
  couponInput.setAttribute('type', 'text');
  couponInput.setAttribute('name', 'coupon');
  couponInput.setAttribute('placeholder', 'Product COUPON')
  couponInput.className = "basket__coupon clearfix";

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

function getTotal(obj) {
  var total = 0;
  for (var prop in obj) {
    total = total + parseFloat(obj[prop]);
  }
  return total;  
}

function totalObject(obj) {
  total = getTotal(obj);
  totalPrice.innerHTML = "$"+ total.toString();
  total = 0;
}

function totalAfterCoupon(coupon) {
  var siteTotal = 0,
      newProp = 0,
      newSpecialObj = {},
      specialTotal
      totalPriceNum = getTotal(allPricesInBasket);

  if (coupon === siteSale) {
    coupon = 5;
    siteTotal = totalPriceNum - (totalPriceNum/100 * coupon); 
    console.log(siteTotal);
  }

  if (coupon === productSale) {
    coupon = 10;
  }

  if (coupon === specialSale) {
    coupon = 15;

    for (var prop in allPricesInBasket) {
      newSpecialObj[prop] = allPricesInBasket[prop];
      for (var key in allCouponsInBasket) {
        if (key === prop && allCouponsInBasket[key] === "SPECIALSALE") {
          newProp = parseFloat(allPricesInBasket[prop]) - (parseFloat(allPricesInBasket[prop])/100 * coupon);
          newSpecialObj[prop] = newProp.toString();
        } 
      }
    }
    console.log(getTotal(newSpecialObj));
  }
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
    if ( elem.parentElement.parentElement.classList.contains('special') ) {
      basketItems.insertAdjacentElement('afterbegin',basketFragment(itemCaption, itemPrice, 'special-sale'));
      allCouponsInBasket[itemCaption] = specialSale;
    } else {
      basketItems.insertAdjacentElement('afterbegin',basketFragment(itemCaption, itemPrice,''));
    }

    // 1. Remain hidden until at least one item has been added
    basketContainer.classList.add('display');
    
    // Add quantiy to basket quantiy amount circle.
    totalQuantity.innerHTML = basketItems.childElementCount;
    
    // Set the property of the price object to the item caption and value to the item price when they are first added to the basket.
    allPricesInBasket[itemCaption] = itemPrice;
    totalObject(allPricesInBasket);


    // Remove items from the shopping cart. Close shopping cart if no items.
    if ( basketItems.childElementCount >= 0) {
      
      forEach(removeBtn, function(index, elem) {
        elem.addEventListener('click', function(ev) {
          ev.preventDefault();
          this.parentElement.remove();
          totalQuantity.innerHTML = basketItems.childElementCount;
          
          delete allPricesInBasket[this.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];
          totalObject(allPricesInBasket);

          delete allCouponsInBasket[this.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];

          if (basketItems.childElementCount === 0) {
            basketContainer.classList.remove('display');
          } 
        }, false);
      });

      // 5. Change the quantity of an item. A quantity of 0 will remove the item from the cart.
      forEach(itemQuantity, function(index, elem) {

        elem.addEventListener('input', function(ev) {
          ev.preventDefault();
          
          // Quantity of each item multiplied by cost of item.
          this.previousElementSibling.innerHTML = "$"+ this.value * this.previousElementSibling.getAttribute('data-basketprice');
          
          // Remove the item from the basket if quantity entered is 0.
          if (this.value ==='0') {
            this.parentElement.remove();
            totalQuantity.innerHTML = basketItems.childElementCount;
            // Remove item from total prices object.
            delete allPricesInBasket[this.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];
            // Update total.
            totalObject(allPricesInBasket);

            delete allCouponsInBasket[this.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')];
          }
          
          // Adjust the value in the prices object if amount is greater than 1.
          if (this.value >= "1") {
            allPricesInBasket[this.previousElementSibling.previousElementSibling.getAttribute('data-basketcaption')] = this.previousElementSibling.innerHTML.replace('$', '');
            totalObject(allPricesInBasket);
          }
          
          // Close the basket if there are no items in it.
          if (basketItems.childElementCount === 0) {
            basketContainer.classList.remove('display');
          } 
        }, false);
      });

      // forEach(coupon, function(index, elem) {
      //   elem.addEventListener('input', function(ev) {
      //     ev.preventDefault();

      //     if (this.value === productSale) {
      //        allCouponsInBasket[this.parentElement.firstElementChild.getAttribute('data-basketcaption')] = productSale; 
      //     }

      //   }, false);
      // });
    } 
  }, false);
});

// siteCoupon.addEventListener('input', function(ev) {
//   ev.preventDefault();

//   console.log(this.value);
// }, false);

updateBtn.addEventListener('click', function(ev) {
  ev.preventDefault();
  var couponValue;

  forEach(coupon, function(index, elem) {
    if (coupon.length === 1) {
      couponValue = elem.value;
    }
  });

  if (siteCoupon.value === 'SITESALE') {
    totalAfterCoupon(siteSale);
  }

  if (siteCoupon.value === 'SPECIALSALE') {
    totalAfterCoupon(specialSale);
  }

  if (couponValue === 'ITEMAWESOME') {
    console.log(couponValue);
  }

}, false);



 








