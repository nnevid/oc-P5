const cart = JSON.parse(localStorage.getItem("Cart"));
console.log(cart);

let canapRecup = [];
cart.forEach(element => {
   
   let cartKanap = element.id
   // console.log(cartKanap)
   fetch (`http://127.0.0.1:3000/api/products/${cartKanap}`)
   .then(function(res){
      // canapRecup.push(res.data)
    return  res.json();
   })
   .then(function(data){
      console.log(data._id)
      canapRecup.push(data)
   })
});
console.log(canapRecup)

// const cartItems = document.getElementsById("cart_items");
// const cartOrder = document.getElementById("cart__order")



