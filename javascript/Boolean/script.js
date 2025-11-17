let paper = document.getElementById('btn-1');
let rock = document.getElementById('btn-2');
let scissor = document.getElementById('btn-3');
let me = document.getElementById('my');
let computer = document.getElementById('computer');
let res = document.getElementById('res');

let flag = true;
function holder1(){
  me.innerHTML="🖐️";
  com();
  result();
}
function holder2(){
  me.innerHTML="✊";
  com();
  result();
}
function holder3(){
  me.innerHTML="✌️";
  com();
  result();
}
function com(){
let random = Math.floor(Math.random()*3);
if(random==0){
  computer.innerHTML="🖐️";
}
else if(random==1){
  computer.innerHTML="✊";

}
else{
  computer.innerHTML="✌️";
}
}

function result(){
  if(me.innerHTML==computer.innerHTML){
    res.innerHTML="Draw";
  }
  if(me.innerHTML=="🖐️" && computer.innerHTML=="✊"){
    res.innerHTML="You Win";
  }
  if(me.innerHTML=="🖐️" && computer.innerHTML=="✌️"){
    res.innerHTML="You Lose";
  }
  if(me.innerHTML=="✊" && computer.innerHTML=="✌️"){
    res.innerHTML="You Win";
  }
  if(me.innerHTML=="✊" && computer.innerHTML=="🖐️"){
    res.innerHTML="You Lose";
  }
  if(me.innerHTML=="✌️" && computer.innerHTML=="🖐️"){
    res.innerHTML="You Win";
  }
  if(me.innerHTML=="✌️" && computer.innerHTML=="✊"){
    res.innerHTML="You Lose";
  } else{   
    return;
  }
}



paper.addEventListener("click", holder1);
rock.addEventListener("click",holder2);
scissor.addEventListener("click",holder3);


