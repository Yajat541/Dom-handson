let bg= document.getElementsByClassName("gamecontainer");
let rightNumber=document.getElementsByClassName("rightnumber");
let guessnum=document.getElementById("guessnumber"); 
let numberStatus=document.getElementById("numberstatus"); 
let chances=document.getElementById("chances"); 
let highscore=document.getElementById("highscore");
let check=document.getElementById("check");
let win=document.getElementsByClassName("title");
let randomNum=parseInt((Math.random()*100)+1);

let count=100;
function checknumber() {
    if(randomNum<parseInt(guessnum.value)){
        numberStatus.innerHTML="Your Guess is High ";
        count--;
        chances.innerHTML=`${count}`;
    }
    else if(randomNum>parseInt(guessnum.value)){
        numberStatus.innerHTML="Your Guess is low";
        count--;
        chances.innerHTML=`${count}`;
    }
    else{
        numberStatus.innerHTML=`${randomNum}`;
        count--;
        highscore.innerHTML=`${count}`;
        bg[0].style.backgroundColor="green";
        numberStatus.innerHTML="😍😍 hurry you won 😍😍"
    }
}
function reloadpage(){
    location.reload();
}
