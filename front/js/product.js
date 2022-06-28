// retrieve Item's Id from URL
let str = location.href;
let url = new URL (str);
let itemId = url.searchParams.get("id");
console.log(itemId)
// retrieve product's info from array
fetch(`http://127.0.0.1:3000/api/products/${itemId}`)
.then(function(response){
return response.json();
})
// Display product'infos on page according to HTML's structure
.then (function(products){
   console.log(products);
   const pictProduct = document.getElementsByClassName("item__img")[0];
  pictProduct.innerHTML= `<img src="${products.imageUrl}" alt="Photographie d'un canapé">`
   const nameProduct = document.getElementById("title");
  nameProduct.innerHTML= `${products.name}`
   const priceProduct = document.getElementById("price");
   priceProduct.innerHTML= `${products.price}`
   const descriptionProduct = document.getElementById("description");
   descriptionProduct.innerHTML= `${products.description}`
   
})
.catch(function(err){
   alert(err)
})
 



  // Call in single item on HTML fron-tend
//   const pictProduct = document.getElementsByClassName("item__img")[0];
//   pictProduct.innerHTML= `<img src="" alt="Photographie d'un canapé">`
  
 



