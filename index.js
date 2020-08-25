var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100+1);
    cart.push({ [item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}


function viewCart() {
 var itemsandprices = [];
  var intro = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    var itemx = Object.keys(cart[i]);
    var pricex = cart[i][itemx];
        itemsandprices.push(itemx +' at $'+ pricex)  }
    var dositems = itemsandprices.join(' and ');
    var beginning = itemsandprices.slice(0, -1).join(', ');
    var end = itemsandprices.slice(-1);

  if (cart.length === 0){console.log('Your shopping cart is empty.')}
  else if (cart.length === 1){console.log(`${intro} ${itemsandprices}.`)}
  else if (cart.length === 2){console.log(`${intro} ${dositems}.`)}
  else if (cart.length > 2){return(`${intro} ${beginning}, and ${end}.`)}
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
