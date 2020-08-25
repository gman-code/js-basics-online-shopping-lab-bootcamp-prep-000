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
  if (getCart().length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let out = "In your cart, you have ";
    for (let i=0; i < getCart().length; i++) {
      if (getCart().length > 1 && i === getCart().length-1) {
        out = out + "and ";
      }
      let val = getCart()[i].itemName + " at $" + getCart()[i].itemPrice;
      out = out + val;
      if (getCart().length > 1 && i != getCart().length-1) {
        out = out + ", ";
      }
    }
    return out + ".";
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
