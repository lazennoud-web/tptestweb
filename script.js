console.log("JavaScript fonctionne !");
const btnMessage=document.getElementById("BtnMessage"); 
const message= document.getElementById("message"); 

btnMessage.addEventListener("click",function(){
    message.textContent = "Bravo , tu as clique sur le bouton !";
})