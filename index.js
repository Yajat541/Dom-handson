// question 1
let selector1=document.getElementById("text");
console.log(selector1);
selector1.innerHTML=selector1;

// question 2
let selector2=document.getElementsByTagName("h1");
console.log(selector2[0]);
selector2[1].innerHTML=selector2[1];

// question 3
let selector3=document.getElementsByClassName("box")
console.log(selector3[0])
selector3[0].innerHTML=selector3[0];

// question 4
let selector4=document.getElementsByTagName("h1")
selector4[2].addEventListener('click',()=>{
    selector4[2].innerHTML="HELLO WORLD"
})

// question 5
let selector5=document.getElementsByClassName("content");
function changecontent(){
    selector5[0].innerHTML="Welcome to Elevation academy";
}
// question 6
let selector6=document.getElementsByTagName("h1")
selector6[3].addEventListener('click',()=>{
    selector6[3].setAttribute("style","color:red");
    selector6[3].setAttribute("id","heading");
})
// question 7
let selector7=document.getElementsByClassName("parent");
let cnt=true;
function changedirection(){
    if(cnt){
        selector7[0].style.flexDirection="row";
        cnt=false;
    }else{
        selector7[0].style.flexDirection="column";
        cnt=true;
    }
}

// question 9
let hour=document.getElementById("hh")
let minute=document.getElementById("mm")
let second=document.getElementById("ss")
let ampm="document.get"
function clock(){
    let time=new Date();
    let hrs=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();

    minute.innerHTML=`${mins} :`
    second.innerHTML=`${secs}`;
    if(hrs>=12){
        hour.innerHTML=`${hrs-12} :`;
        ampm.innerHTML=": PM";
    }else{
        hour.innerHTML=`${hrs} :`;
    }
}
setInterval(()=>{
    clock()
},1000);

