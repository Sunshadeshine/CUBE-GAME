// document.querySelectorAll("button")[0].onclick=R1();
function R1(){
let randomNumber1=Math.floor(Math.random()*6+1);
switch(randomNumber1){
 case 1:document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
 break;
case 2:document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
break;
case 3:document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
break;
case 4:document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
break;
case 5:document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
break;
case 6:document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
break;
}}
function R2(){
let randomNumber2=Math.floor(Math.random()*6+1);
switch(randomNumber2){
 case 1:document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
 break;
case 2:document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
break;
case 3:document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
break;
case 4:document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
break;
case 5:document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
break;
case 6:document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
break;
}}
if(randomNumber1>randomNumber2)
{document.querySelector("h3").textContent="Player 1 wins";}
else if(randomNumber1<randomNumber2)
{document.querySelector("h3").textContent="Player 2 wins";}
else
{document.querySelector("h3").textContent="Match Draw";}
// }
