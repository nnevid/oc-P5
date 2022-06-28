// call in all the items
let placeholder = document.getElementById("items");
let out ="";
fetch("http://127.0.0.1:3000/api/products")
.then(function(response){
return response.json();
})
.then (function(products){
 
   for (let index = 0; index < products.length; index++) {
      const element = products[index];
      console.log(element)
      out += `
      <a href="./product.html?id=${element._id}">
            <article>
              <img src="${element.imageUrl}">
              <h3 class="productName">${element.name}</h3>
              <p class="productDescription">${element.description}</p>
            </article>`
   }
  placeholder.innerHTML = out;
 })


 