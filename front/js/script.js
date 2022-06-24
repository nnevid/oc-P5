// call in all the items
let placeholder = document.getElementById("items");

fetch("http://127.0.0.1:3000/api/products")
.then(function(response){
return response.json();
})
.then (function(products){
   
   let out ="";
 for(let product in products){
   
   out = `<article>
     <img src="${products.imageUrl}" alt=${products.altTxt}>
     <h3 class="productName">${products.name}</h3>
     <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
   </article>`
   
   
   ;
 }
 placeholder.innerHTML = out;
})