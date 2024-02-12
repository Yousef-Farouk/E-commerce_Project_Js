async function getProducts()
{
    let response = await fetch("https://yousef-farouk.github.io/E-commerce-Api/Products.json")
    let data = await response.json()
    return data
}


document.addEventListener("DOMContentLoaded", function() {
    
    updateCart()
    back_to_top()
    setProducts()
    slide()
    filter()
    cartCount()
    add_to_cart()
    productDetails()

})




function updateCart(){

    var cart = document.getElementById("cart_count")
    var count = 0 ;


    for (let i = 0 ; i < localStorage.length ; i++)
    {
        let key = localStorage.key(i)
        let value = JSON.parse(localStorage.getItem(key))
        count += value.quantity
    }

    cart.innerHTML = count ;


    if (cart.innerHTML == '0' )

    cart.style.backgroundColor = "#3d464d" ;
    
    else
    
    cart.style.backgroundColor = "red" ;
}


function slide (){
    var prev_btn = document.getElementsByClassName("prev")
    var next_btn = document.getElementsByClassName("next")
    var divs = document.getElementsByClassName("image-container")
    var current = 0
    var currentDiv=divs[current];
    prev_btn[0].addEventListener("click",function(){

        currentDiv.classList.remove('show')
        if(current == 0 )
        {
            currentDiv = divs[divs.length-1];
            current = divs.length-1
        }
        else{
            currentDiv = divs[current-1]
            current--;

        }
       currentDiv.classList.add('show')
    })

    next_btn[0].addEventListener("click",function(){

        currentDiv.classList.remove('show')
        if(current == divs.length -1  )
        {
            currentDiv = divs[0];
            current = 0 
        }
        else{
            currentDiv = divs[current+1]
            current++;
        }
       currentDiv.classList.add('show')
      

    })
}

function setProducts(){
    var imgs=[]
    var imgs = document.getElementsByClassName("item-img")
    var prices = document.getElementsByClassName("item-price")
    var names = document.getElementsByClassName("item-name")
    var categories = document.getElementsByClassName("type")
    getProducts().then((result) => {
        result.forEach((element,index) => {
            imgs[index].src = element.img
            names[index].innerHTML = element.name
            prices[index].innerHTML=`${element.pirce} EGP`
            categories[index].id = `${element.Category}`
        });
    })


    
}


function filter(){

    var clothes = document.getElementById("clothes")
    var furniture = document.getElementById("furniture")
    var electronics = document.getElementById("electronics")
    var jewellery = document.getElementById("jewellery")
    var type = document.getElementsByClassName("type")
    function remove(id){
        for (var element of type )
        {
            if (element.id != id)
            {
                element.style.display = "none"
                console.log("hidden");
            }
            else{
                element.style.display = "block"
            }
        }    
    }

    clothes.addEventListener("click",function(){
        remove(clothes.id)
    })

    furniture.addEventListener("click",function(){
        remove(furniture.id)
    })

    electronics.addEventListener("click",function(){
        remove(electronics.id)
    })

    jewellery.addEventListener("click",function(){
        remove(jewellery.id)
    })
    
}


export function cartCount(){

    var btns = document.querySelectorAll(".product-action button");
    for (var btn of btns ){
        btn.addEventListener("click",function(){
            var count = document.getElementById("cart_count")
            count.innerHTML = `${Number(count.innerHTML)+1}`;
            count.style.backgroundColor='red';
        })
    }
}


function back_to_top(){

    var top = document.getElementById("back-to-top")
    window.addEventListener('scroll', () => {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            top.classList.remove("d-none")
        } 
        else {
            top.classList.add("d-none")

        }
    })

    top.addEventListener("click",  function(){

        top.style.backgroundColor = "#ffc107";
        top.style.boxShadow= "0px 0px 6px #ffc107";
        top.style.borderColor="#ffc107"

        document.documentElement.scrollTop = 0 ;
    })

}


function add_to_cart(){

    var btns = document.querySelectorAll(".product-action button");
    var id = 1 ;
    for (let i = 0; i < btns.length; i++) {

         btns[i].addEventListener("click",function(){
           
            let img = btns[i].parentElement.parentElement.firstElementChild;

            let item_name = img.parentNode.nextElementSibling.firstElementChild;
            let price = item_name.nextElementSibling;
            let product = {
                id : id ,
                name: `${item_name.innerHTML}`,
                price :`${price.innerHTML}`,
                image : `${img.src}`,
                quantity: 1 
            };

            localStorage.setItem(`product${id++}`, JSON.stringify(product));

        
        })
    }
}


function productDetails()
{
    
    var links = document.querySelectorAll(".product-action a")

    for (let i = 0; i < links.length; i++){
        links[i].addEventListener("click",function(){
 
            var parent = this.parentElement.parentElement.parentElement
            var img = parent.querySelector("img")
            var p_name = parent.querySelector(".item-name")
            var p_price = parent.querySelector(".item-price")
    
            sessionStorage.setItem("img",img.src)
            sessionStorage.setItem("pname",p_name.innerHTML)
            sessionStorage.setItem("pprice",p_price.innerHTML)
    
        })
    }
    
}