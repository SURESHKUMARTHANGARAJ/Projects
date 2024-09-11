var data,originaldata;
async function FetchData(){
    const response= await fetch("db.json")
    const dataResponse=await response.json();
    data=dataResponse;
    originalData=data;
    generate();
}
(async()=>await FetchData())()

var cartCountbox=document.getElementById("cart-count");
let cartOpen=document.getElementById("cart-open");
let cartClose=document.getElementById("cart-close");
let cart=document.querySelector(".cart");
let DeleteCart=document.querySelector(".delete-cart");
let increment=document.querySelector(".increment");
let decrement=document.querySelector(".decrement");

cartOpen.addEventListener("click",(e)=>{
    event.preventDefault();
    cart.style.left="0px";
})
cartClose.addEventListener("click",(e)=>{
    event.preventDefault();
    cart.style.left="-450px";
})
function handleDeleteCart(e){
    event.target.parentElement.parentElement.remove();
    cartCountbox.innerText=Number(cartCountbox.innerText)-1;
}
function handleincrement(e){
    let outer=event.target.parentElement;
    let quantity=outer.querySelector(".quantity-no");
    var count=Number(quantity.innerText)+1;
    quantity.innerText=count;
}
function handledecrement(e){
    let outer=event.target.parentElement;
    let quantity=outer.querySelector(".quantity-no");
    var count=Number(quantity.innerText)-1;
    quantity.innerText=count;
}


function generate(){
for(var i=0;i<data.length;i++){
    generateCard(data[i].img,data[i].title,data[i].stars,data[i].price,data[i].description,data[i].count);
}
}
var productContainer=document.querySelector(".Product-container");
var cartProduct=document.querySelector(".cart-product");

function generateCard(img,title,stars,price,description){
let div=document.createElement("div");
div.setAttribute("class","product");
div.innerHTML=`<div class="img-container">
                    <img src="img/${img}">
                </div>
                <div class="text-container">
                    <h2 class="pro-title">${title}</h2>
                    <p class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </p>
                    <p class="price">${price}</p>
                    <p class="desc">${description}</p>
                    <div class="add-to-cart">
                        <button  onclick="generateCart(Event)">Add to cart&nbsp;&nbsp;<i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>`;
productContainer.appendChild(div);
}
const searchBtn=document.getElementById("search-btn");
var searchInput=document.getElementById("search-input");
var filteredData;
function SearchItem(){
    data=originalData;
    var searchQuery=searchInput.value;
    if(searchQuery!=""){
        filteredData=data.filter(item=>{
            return item.title.toLowerCase().trim().includes(searchQuery.toLowerCase().trim());
        });
        data=filteredData;
        productContainer.innerHTML="";
        generate();
    }else{
        productContainer.innerHTML="";
        data=originalData;
        generate();
}
}




function generateCart(e){
    event.preventDefault();
    var parent=event.target.parentElement.parentElement;
    var bigparent=parent.parentElement;
    var imgcon=bigparent.querySelector(".img-container")
    var img=imgcon.querySelector("img");
    var cartsrc=img.src;
    console.log(parent);
    var h2=parent.querySelector(".pro-title");
    var cartname=h2.innerText;
    console.log(cartname);
    var p=parent.querySelector(".price");
    var cartprice=p.innerText;
    console.log(cartprice);
    let div1=document.createElement("div");
    div1.setAttribute("class","cart-pro");
    div1.innerHTML=`<img src="${cartsrc}">
                    <div class="cart-pro-content">
                    <h3 class="pro-name">${cartname}</h3>
                    <h4 class="pro-price">${cartprice}</h4>
                    <div class="quantity">
                        <button class="increment" onclick="handleincrement(Event)">+</button>
                        <span class="quantity-no">1</span>
                        <button class="Decrement" onclick="handledecrement(Event)">-</button>
                    </div>
                    </div>
                    <div class="delete-cart" onclick="handleDeleteCart(Event)"><i class="fa-solid fa-trash-can"></i></div>`
    cartProduct.append(div1);
    cartCountbox.innerText=Number(cartCountbox.innerText)+1;
}
