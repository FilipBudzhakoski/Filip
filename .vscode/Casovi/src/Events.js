console.log("Connected");

function greetings(){
    alert(`Hello G5`)
}
function onMouseenter(){
    console.log(`I am abouve the greeting button`)
}
const grettingBtn =document.getElementById("grettingBtn");

grettingBtn.onclick = greetings;
grettingBtn.onmouseenter = onmouseenter;

function sayHello(){
    alert(`Hello amigos!`);
};

grettingBtn.onclick = sayHello;

const btnListener = document.getElementById("btnListener");

btnListener.addEventListener("click", greetings);
//btnListener.addEventListener("mouseenter, onMouseEnter");
//function Name(){
   // alert (`Hello Filip`)
//}
//const Name = document.getElementById("Name");
//Name.addEventListener("click",Name);


const personalGreeting = document.getElementById(`personalGreeting`);

function greetPersonal(name){
    alert(`Hello ${name}!`)
}
personalGreeting.addEventListener("click",function(){
    let userInput = prompt(`What is your name`)
    greetPersonal(userInput)
});