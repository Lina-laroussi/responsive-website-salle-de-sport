let name=document.getElementById("name");
let prenom=document.getElementById("prenom");
let email=document.getElementById("email");
let pwd=document.getElementById("password");

document.getElementById("btn1").addEventListener("click" , function(){
    if((!name.value)&&(!prenom.value)&&(!email.value)&&(!pwd.value)){
        alert("veuillez remplir les différents champs");}
       // document.getElementById("erreur").innerHTML="veuillez remplir les champs";
})


name.addEventListener("change",function(){
    if(name.value.length<4){
       document.getElementById("message").innerHTML="minimum 4 caratéres";
     }
     else{
         document.getElementById("message").innerHTML="";
     }
})



email.addEventListener("blur" , function(){
    if(!email.value){
        document.getElementById("erreur").innerHTML="renseigner le champ email";}
    else{
         document.getElementById("erreur").innerHTML="";
          
        }
})  

pwd.addEventListener("blur" , function(){
    if(!pwd.value){
        document.getElementById("erreur").innerHTML="renseigner le champ Mot de passe";}
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

 /*******validation mot de passe***** */

pw.addEventListener('blur',function(){
    if(pw.value=="") { 
        document.getElementById("alert").innerHTML = "renseigner le champ mot de passe!" ;
    }
    else{
        document.getElementById("alert").innerHTML="";
    }
})

var regexPass =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,})/;
pw.addEventListener('change' , function(){
    if(!pw.value.match(regexPass)){
        document.getElementById("pwd").innerHTML = "essayer une autre fois" ;
    }
    else{
        document.getElementById("pwd").innerHTML="";
    }
})