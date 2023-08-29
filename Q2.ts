// Q No.2.	Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items,and update quantities
//  using the splice method. Print the cart's contents after each operation
var shoppingCart:string[]=["Egg","Bread","Milk","Jam", "Biscuits",
"Tea", "BaqarKhani"]
shoppingCart.splice(2,1)
console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart.push("Rus")
console.log(shoppingCart)
shoppingCart.shift()
console.log(shoppingCart)
shoppingCart.unshift("Egg")
console.log(shoppingCart)
