document.addEventListener("DOMContentLoaded",function(){

    
    updateCart()

    getProductDetails()

    addToCart()
    

})



function getProductDetails(){

    document.querySelector(".product-img").src = sessionStorage.getItem("img")
    document.querySelector(".item-name").innerHTML = sessionStorage.getItem("pname")
    document.querySelector(".item-price").innerHTML = sessionStorage.getItem("pprice")
}


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


function addToCart(){

    document.querySelector(".cart-add").addEventListener("click",function(){

        var cart = document.getElementById("cart_count")

        cart.innerHTML = Number(cart.innerHTML) + 1 ;

        cart.style.backgroundColor = "red" ;

        let product = {
            id : localStorage.length+1,
            image:sessionStorage.getItem("img"),
            name : sessionStorage.getItem("pname"),
            price:sessionStorage.getItem("pprice"),
            quantity:1
        }

        localStorage.setItem(`product${localStorage.length+1}`, JSON.stringify(product))
    })

}