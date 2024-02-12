

document.addEventListener("DOMContentLoaded",function(){
  
    get_from_cart()
    increase_quantity()
    decrease_quantity()
    remove()
    cartCount()
   
})




function get_from_cart(){
   

    var tbody = document.getElementById("body")
    var row = document.getElementById("row_item")
    var total = 0
    for (let i = 0; i< localStorage.length; i++) {
       
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));

        if (i == 0 )
        {

            row.querySelector("#price").innerHTML = value.price
            row.querySelector("#total").innerHTML = value.price
            row.querySelector("img").setAttribute("src",value.image) ;
            row.querySelector("#name").innerText= value.name
            row.querySelector("#quantity").value = value.quantity
            row.querySelector("a").id = key 
            row.classList.remove("d-none")
        }
        else
        {
            let clone = row.cloneNode('true')
            clone.querySelector("#price").innerHTML = value.price
            clone.querySelector("#total").innerHTML = value.price
            clone.querySelector("img").setAttribute("src",value.image) ;
            clone.querySelector("#name").innerText= value.name
            clone.querySelector("#quantity").value = value.quantity
            clone.querySelector("a").id = key 
            tbody.appendChild(clone)
        }
       
        total += Number(value.price.split(" ")[0]) * value.quantity
        

    }

    document.querySelector("#sub_total").innerHTML = `${total} EGP`
    document.querySelector("#final_total").innerHTML = `${total + 100} EGP`  
}


function cartCount(){

    var count = document.getElementById("cart_count")
    document.querySelectorAll("#quantity").forEach((Element)=>{
        count.innerHTML = Number(count.innerHTML)+ Number(Element.value);
    });
   count.innerHTML != '0' ? count.style.backgroundColor='red' : count.style.backgroundColor='#3d464d'; 
}


function increase_quantity(){

    
    document.querySelectorAll(".btn-plus").forEach((button)=>{

        button.addEventListener("click",function(){
                var tr = this.closest('tr')
                tr.querySelector("#quantity").value = Number(tr.querySelector("#quantity").value ) + 1
                tr.querySelector("#total").innerHTML = `${Number(tr.querySelector("#price").innerHTML.split(" ")[0]) * Number(tr.querySelector("#quantity").value)} EGP`
                document.querySelector("#sub_total").innerHTML = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) + Number(tr.querySelector("#price").innerHTML.split(" ")[0])} EGP`
                document.querySelector("#final_total").innerText = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) +100} EGP`
                document.querySelector("#cart_count").innerHTML = Number(document.querySelector("#cart_count").innerHTML)+1 
                var key = JSON.parse(localStorage.getItem(tr.querySelector("a").id));
                var currentValue = key.quantity ; 
                key.quantity = key.quantity + 1;
                localStorage.setItem(tr.querySelector("a").id, JSON.stringify(key));
    
        })
    })
}

function decrease_quantity(){

    document.querySelectorAll(".btn-minus").forEach((button)=>{
        button.addEventListener("click",function(){

            var tr = this.closest('tr')
            if ( Number(tr.querySelector("#quantity").value) != 0 )
            {
                tr.querySelector("#quantity").value = Number(tr.querySelector("#quantity").value ) - 1
                tr.querySelector("#total").innerHTML = `${Number(tr.querySelector("#price").innerHTML.split(" ")[0]) * Number(tr.querySelector("#quantity").value)} EGP`
                document.querySelector("#sub_total").innerHTML = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) - Number(tr.querySelector("#price").innerHTML.split(" ")[0])} EGP`
                document.querySelector("#final_total").innerText = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) +100} EGP`
                document.querySelector("#cart_count").innerHTML = Number(document.querySelector("#cart_count").innerHTML)-1 
                let key = JSON.parse(localStorage.getItem(tr.querySelector("a").id));
                let currentValue = key.quantity ; 
                key.quantity = key.quantity - 1;
                localStorage.setItem(tr.querySelector("a").id, JSON.stringify(key));
            }
    
        })
    })
}


function remove(){

    document.querySelectorAll(".remove").forEach((button)=>{

        button.addEventListener("click",function(){
            var tr = this.closest('tr')
            document.querySelector("#sub_total").innerHTML = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) - (Number(tr.querySelector("#total").innerHTML.split(" ")[0]))} EGP`
            document.querySelector("#final_total").innerText = `${Number(document.querySelector("#sub_total").innerHTML.split(" ")[0]) +100} EGP`
            document.querySelector("#cart_count").innerHTML = Number(document.querySelector("#cart_count").innerHTML) - Number(tr.querySelector("#quantity").value)
            tr.remove();
            for(let i = 0 ; i < localStorage.length ; i++)
            {
                var key = localStorage.key(i)
                if(JSON.parse(localStorage.getItem(key)).name == tr.querySelector("#name").innerHTML ){

                    localStorage.removeItem(key)
                }

            }
        })
    })
}

function findkey(k )
{
    for(let i = 0 ; i < localStorage.length ; i++)
    {
        var key = localStorage.key(i);

        if(JSON.parse(localStorage.getItem(key)).name == tr.querySelector("#name").innerHTML )
        {

            localStorage.removeItem(key)
        }

    }
}