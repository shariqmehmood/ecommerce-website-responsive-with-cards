 
 let products = [
    {
        name: "Cheese Burger",
        price: 50,
        image: "download bur.jpg" 
    },
    {
        name: "Chease ROll",
        price: 80,
        image: "roll.jpg" 
    },
    {
        name: "PIZZA",
        price:750,
        image: "piza.jpg" 
    },
    {
        name: "ALLO PARATHa",
        price: 90,
        image: "alo.jpg" 
    },
    {
        name: "chatni",
        price:50,
        image: "chtni.jpg" 
    },
    {
        name:"KABAB",
        price:180,
        image:"kbb.jpg"
    },
    {
        name:"ROTI",
        price:25,
        image:"rotyi.jpg"
    },
    {
        name:"SALAD",
        price:90,
        image:"salad.jpeg"
    },
    {
        name:"burger",
        price:290,
        image:"download bur.jpg"
    },
    {
        name: "Cheese Burger",
        price: 50,
        image: "download bur.jpg" 
    },
    {
        name: "PIZZA",
        price: 800,
        image: "piza.jpg" 
    },
    {
        name: "PIZZA",
        price:750,
        image: "piza.jpg" 
    }
]

let main = document.getElementById('products');

for(var i = 0; i < products.length; i++){
    main.innerHTML += `
    <div class="card"  id="cards" ;">
    <img src="${products[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].price} Bitcoin</p>
        <a  onclick='addToCart("${products[i].name}","${products[i].price}","${products[i].image}")' class="btn btn-primary">ADD TO CART</a>
    </div>
</div>
    `
}

let allCarts = [];
let carts = localStorage.getItem('carts')

if(carts !== null){
   allCarts = JSON.parse(carts)
   let cart_badge = document.getElementById('mybadge');
   cart_badge.innerHTML = allCarts.length
}

function addToCart(name,price,image){
    let cart = {
        name,
        price,
        image
    }
    allCarts.push(cart)
    localStorage.setItem('carts',JSON.stringify(allCarts))
     var cart_badge = document.getElementById('mybadge');
    cart_badge.innerHTML = allCarts.length
  
}
    

function myFunction() {
    setTimeout(function(){
        var loader=document.getElementById("loader");
        loader.style.display="none"
        var button=document.getElementById("buttn");
        button.style.display="block"
        }, 3000);
  }










    
