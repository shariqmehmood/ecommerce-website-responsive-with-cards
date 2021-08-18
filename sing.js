let singin=()=>{
 
    var email=document.getElementById("semail");
    var password=document.getElementById("spassword");
    
    for (i=0; i < alluser.length;i++){
        if(alluser[i].email===email.value&&alluser[i].password===password.value)

            alert("login susses")
            window.location.href="./index.html"
            
            
          
        }
        
}



let singup=()=>{
    var name=document.getElementById("name").value
    localStorage.setItem("name",name)
    var email= document.getElementById("email")
    var password= document.getElementById("password")
   let user={
       email:email.value,
       password:password.value
   }

   alluser.push(user)
   
   localStorage.setItem("users",JSON.stringify(alluser))
    
}




  

alluser=[]
let users=localStorage.getItem("users");
if(users !== null){
     alluser=JSON.parse(users)
}
let allCarts=[];
let carts=localStorage.getItem("carts");
if(carts !== null){
allCarts=JSON.parse(carts)
}
let cartproduct= document.getElementById('carts-products');

for(var i = 0; i < allCarts.length; i++){
    cartproduct.innerHTML += `
    <div class="cardss">
    <img src="${allCarts[i].image}" id="imgcard" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${allCarts[i].name}</h5>
        <p class="card-text">${allCarts[i].price} Bitcoin</p>
    </div>
</div>
    `
}
