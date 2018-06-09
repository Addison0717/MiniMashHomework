// ADD CLONE METHOD TO COPY PREVIOUS FILLED ARRAY


class ShoppingCart {
  constructor(name, quantity, pricePerUnit) {
    this.name = name
    this.quantity = quantity
    this.pricePerUnit = pricePerUnit
    this.items = []
  }

  getItems(item) {
    return this.items
  }

  addItem(name, quantity, pricePerUnit){
    this.items.push({name, quantity, pricePerUnit})
  }

  clear() {
    this.items = []
  }

  clone() {

    const newCart = new ShoppingCart()
    console.log('ITEMS', this.items) // ITMS IN THIS CURRENT CART [ { name: 'Rolex watch', quantity: 2, pricePerUnit: 250.1 } ]
    console.log('ITEMS JSON', JSON.stringify(this.items)) // ITEMS IN THIS CART IN JSON --> Close but not right format [{"name":"Rolex watch","quantity":2,"pricePerUnit":250.1}]
    // console.log('ITEMS PARSE', JSON.parse(this.items)) // CANNOT PARSE ARRAY
    console.log('ITEMS PARSED JSON', JSON.parse(JSON.stringify(this.items))) // RIGHT FORMAT!!!
    newCart.items = JSON.parse(JSON.stringify(this.items)) // SET CART EQUAL TO SAME FORMAT
    return newCart

  }


}




// USING BELOW THIS LINE TO TEST


const cart1 = new ShoppingCart()

console.log("THIS IS CART 1 WHEN WE CREATE IT", cart1)

cart1.addItem("Rolex watch", 2, 250.1)

console.log("Cart1 (After adding watch):", cart1.getItems())

console.log('Cart 1 Clone:', cart1.clone())
const cart2 = cart1.clone()

console.log("------------------")

console.log("Items in cart 1", cart1.getItems())
console.log("Items in cart 2", cart2.getItems())

cart2.addItem("Shoes", 1, 90.0)

console.log("Items in cart 1", cart1.getItems())
console.log("Items in cart 2", cart2.getItems())

cart1.addItem("Handbag", 4, 50.0)

console.log("Items in cart 1", cart1.getItems())
console.log("Items in cart 2", cart2.getItems())

// ITEMS ARE SEPERATE!!!! :)


module.exports = ShoppingCart
