var i=0;
var images=[];
var time=3000;


images[0]='images/slid1.jpg';
images[1]='images/slid7.jpg';
images[2]='images/slider1.jpg';


function changeImg(){
    document.slide.src=images[i];

    if(i < images.length - 1){
        i++;

    } else{
        i=0;
    }

    setTimeout("changeImg()",time);

}

window.onload = changeImg;

/****validation name *********/

let name=document.getElementById("name");

name.addEventListener("blur",function(){
    if(!name.value) { 
        document.getElementById("msg").innerHTML = "remplir le champ nom !" ;
        document.getElementById("msg").style.color="red";
    }
    else{
        document.getElementById("msg").innerHTML="";
    }
})

name.addEventListener("change" , function(){
    if(name.value.length < 4){
        name.setAttribute('class','form-control is-invalid');
        name.focus() ;
    }
    else{
        name.setAttribute('class','form-control is-valid') ;
    }
})


/*******validation email **********/


let email=document.getElementById("email");

email.addEventListener("blur",function(){
    if(!email.value) { 
        document.getElementById("msg1").innerHTML = "remplir le champ email!" ;
        document.getElementById("msg1").style.color="red";
    }
    else{
        document.getElementById("msg1").innerHTML="";
    }
})

var regexEmail = /\S+@\S+\.\S+/; 
email.addEventListener('change', function(){
    if(!email.value.match(regexEmail)){
        email.setAttribute('class','form-control is-invalid');
        email.focus();
    }
    else{
        email.setAttribute('class','form-control is-valid') ;
    }
    
})


/************validation objet********* */


let objet=document.getElementById("objet");

objet.addEventListener("blur",function(){
    if(!objet.value) { 
        document.getElementById("msg2").innerHTML = "remplir le champ objet!" ;
        document.getElementById("msg2").style.color="red";
    }
    else{
        document.getElementById("msg2").innerHTML="";
    }
})


/******* *****validation message*************/


let message=document.getElementById("message");

message.addEventListener("blur",function(){
    if(!message.value) { 
        document.getElementById("msg3").innerHTML = "remplir le champ message!" ;
        document.getElementById("msg3").style.color="red";
    }
    else{
        document.getElementById("msg3").innerHTML="";
    }
})

let btn=document.getElementById("button");

btn.addEventListener("click",function(){
    if((!name.value)&&(!email.value)&&(!objet.value)&&(!message.value)){
          document.getElementById("msg4").innerHTML="remplir les  différents champs";
          document.getElementById("msg4").style.color="red";
    }
    else{
         alert("formulaire envoyée");
    }
})












