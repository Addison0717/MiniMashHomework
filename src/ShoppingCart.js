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
    // newCart.assign({}, this.items)
    console.log("CLONE ITEMS", newCart.items.push({}))
    return newCart
    // return new ShoppingCart()
  }


}


  const cart1 = new ShoppingCart()

  console.log("THIS IS CART 1 WHEN WE CREATE IT", cart1)

  cart1.addItem("Rolex watch", 2, 250.1)

  console.log("Cart1 (After adding watch):", cart1.getItems())

  console.log('Cart 1 Clone:', cart1.clone())
  const cart2 = cart1.clone()

  console.log("------------------")

  console.log("Items in cart 1", cart1.getItems())
  console.log("Items in cart 2", cart2.getItems())




module.exports = ShoppingCart
