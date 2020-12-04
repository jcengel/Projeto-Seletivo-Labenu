
var enviar = document.querySelector(".botao-enviar");
var email = document.querySelector("#email_campo");
var boasVindas = document.querySelector("#boasvindas");

enviar.addEventListener("click", function(event){
    event.preventDefault();
    
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      
     if(!filter.test(email.value)){
              
        alert("Email Invalido. Por favor, digite o email corretamente.");
        
        email.focus();
        
        return false;
        
      } else {
        alert(`O email: ${email.value} foi enviado!`);
      }

      boasVindas.textContent = `Bem vindo: ${email.value}`;     
});

