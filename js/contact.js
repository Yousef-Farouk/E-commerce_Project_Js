
document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("form").addEventListener('submit', function(event) {
        event.preventDefault();
    });
    
    document.querySelector("form button").addEventListener('click', function(event) {
        event.preventDefault();

    });

    document.querySelector("form button").addEventListener("click",function(){
        validName();
        validEmail();
        checkPass();
        confirmPass();
        checkSubject()
        checkMessage()
    });
})



function validName(){

    var input = document.querySelector("#name").value

    if (input.length == 0 ){

        document.querySelector("#name").nextElementSibling.classList.remove("d-none")

    }
    else {

        for (var c of input){

            if(Number(c) || input.length == 0 )
            {
            
                document.querySelector("#name").nextElementSibling.classList.remove("d-none")
                return
            }
            else{
                document.querySelector("#name").nextElementSibling.classList.add("d-none")
            }
       }
    }
    
}

function validEmail(){

    var input = document.querySelector("#email").value
    if (!input.match(/^[^0-9][a-zA-Z0-9]*@[a-zA-Z]+\.com$/) || input.length == 0 )
    {
        document.querySelector("#email").nextElementSibling.classList.remove("d-none")
        return
    }
    else{
        document.querySelector("#email").nextElementSibling.classList.add("d-none")
        return
    }
}

function checkPass(){

    var input = document.querySelector("#password").value
    if(input.length < 8 )
    {
        document.querySelector("#password").nextElementSibling.classList.remove("d-none")
        return
    }
    else{
        document.querySelector("#password").nextElementSibling.classList.add("d-none")
        return
    }
}

function confirmPass(){

    var pass = document.querySelector("#password").value
    var confirm = document.querySelector("#confirm_password").value

    if (pass.length != confirm.length || confirm.length == 0 ){
        
        document.querySelector("#confirm_password").nextElementSibling.classList.remove("d-none")
        return
    }
    else {

        for(let i = 0 ; i < pass.length ; i++){
            
            if(pass[i] != confirm[i]){
                document.querySelector("#confirm_password").nextElementSibling.classList.remove("d-none")
                return
            }
        }
    }

    document.querySelector("#confirm_password").nextElementSibling.classList.add("d-none")
    return
   
}

function checkSubject(){

    var input = document.querySelector("#subject").value
    if (input.length == 0 ){

        document.querySelector("#subject").nextElementSibling.classList.remove("d-none")
        return

    }
    else {

        document.querySelector("#subject").nextElementSibling.classList.add("d-none")
        return
    }

}

function checkMessage(){

    var input = document.querySelector("#message").value
    if (input.length == 0 ){

        document.querySelector("#message").nextElementSibling.classList.remove("d-none")
        return
    }
    else {

        document.querySelector("#message").nextElementSibling.classList.add("d-none")
        return
    }
}