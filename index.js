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
  var shoppingItems = []
  for (let i=0; i < cart.length; i++) {
    var itemName = Object.values(cart[i])[0]
    var itemPrice = Object.values(cart[i])[1]
    shoppingItems.push(`${itemName} at $${itemPrice}`)
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
