let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","green","purple"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}



function levelUp(){
    level++;
    userSeq=[];
    h2.innerText=`level${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randCol=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randomBtn);
}


function checkAns(idx){
let idx=level-1;
if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        //levelUp();
    }
}else{
    h2.innerHTML=`Game Over <b>Your score is ${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },170);
    reset();
}
}




function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}