let name=document.getElementById("name");
let prenom=document.getElementById("prenom");
let date=document.getElementById("date");
let email=document.getElementById("email");
let adresse=document.getElementById("adresse");

document.getElementById("btn").addEventListener("click" , function(){
    if((name.value=" ")&&(prenom.value=" ")&&(date.value=" ")&&(email.value=" ")&&(adresse.value=" ")){
        alert("veuillez remplir les différents champs");}
       // document.getElementById("erreur").innerHTML="veuillez remplir les champs";
})

 
/****name validation******/
name.addEventListener("change",function(){
    if(name.value.length<4){
       document.getElementById("message").innerHTML="minimum 4 caratéres";
     }
     else{
         document.getElementById("message").innerHTML="";
     }
})



/***validation de tous le champs */
adresse.addEventListener("blur" , function(){
    if(!adresse.value){
        document.getElementById("erreur").innerHTML="renseigner le champ adresse";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  


email.addEventListener("blur" , function(){
    if(!email.value){
        document.getElementById("erreur").innerHTML="renseigner le champ email";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  

date.addEventListener("blur" , function(){
    if(!date.value){
        document.getElementById("erreur").innerHTML="renseigner le champ date";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  


prenom.addEventListener("blur" , function(){
    if(!prenom.value){
        document.getElementById("erreur").innerHTML="renseigner le champ prenom";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  


name.addEventListener("blur" , function(){
    if(!name.value){
        document.getElementById("erreur").innerHTML="renseigner le champ nom";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  







/*******validation email******/
var regexEmail = /\S+@\S+\.\S+/;

email.addEventListener('change', function(){
    if(!email.value.match(regexEmail)) {
        document.getElementById("msg").innerHTML="votre adresse doit contenir @";
    }
    else{
          document.getElementById("msg").innerHTML="";
    }
    
})

