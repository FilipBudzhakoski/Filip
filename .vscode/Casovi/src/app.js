console.log("===========Acces by ID========");
let myDivMain = document.getElementById("main");
console.log(myDivMain);
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

console.log("===Acess by class====");
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(ourParagraphs);

console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`First Element: ${ourParagraphs[0]}`);

console.log("-----Acces by tag name-----");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

console.log(`paragraphs length ;${paragraphs.length}`);
console.log(`Second Element : ${paragraphs[1]}`);

console.log(document);

console.log("===Acces by query===");

let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);

let allDiv = document.querySelectorAll(".myDiv");

console.log("===Acces by sibling===");
let header = document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);
let previous = nextSibling.previousElementSibling;
console.log(previous);

console.log("====Acces by children====");
let secondDiv = document.querySelectorAll(".myDiv")[1];
console.log(secondDiv);
let children =secondDiv.children;
console.log(children);
console.log(`children length: ${children.length}`);
console.log(`second children:${children[1]}`);

let firstChild = secondDiv.firstElementChild;
console.log(firstChild);
let lastChild = secondDiv.lastElementChild;
console.log(lastChild);

console.log("===Getting text===");
let firstPar = document.getElementsByTagName("div")[0];

let textWhitSpace = main.textContent;
console.log(textWhitSpace);

let textWithOutSpace = main.innerText;
console.log(textWithOutSpace);

console.log("===Changing text===");

let headerChangeText = document.getElementById("myTitle");
console.log(headerChangeText.innerText);

headerChangeText.innerText = "New Text from JS!";
headerChangeText.innerText += "Ultra new text!   ";

console.log("Add new HTML");
let addNewHtmlAtMain = document.getElementById("main");
addNewHtmlAtMain.innerHTML +="<h3>New header generated from JS!!!</h3>";
addNewHtmlAtMain.innerHTML +="<p class='my paragragraph first' id='paragraphOne'>New paragraph generated from JS whit class and id!!! </p>";

let myStudent = document.getElementById("myStudent");

function createListItem(itemArray,element,nameOfList){
    element.innerHTML += `<h3> List of ${nameOfList} :</h3>`
    let orderList ="";
    for(let item of itemArray){
        orderList += `<li>${item} </li>`
    }
    
    element.innerHTML += `<ol>${orderList}</ol> `
}

let students = ["Filip" , "Pero" , "Mero", "Toso"];
createListItem(students, myStudent,"students");
createListItem(["G1","G2","G3"], myStudent,"Groups");

let addCss =document.getElementsByClassName("second")[0];
addCss.style.backgroundColor="green";
addCss.style.color ="red";
addCss.style.display="none";

let container =document.getElementById("container");

function addParagraph(text,element){
let newParagraph =document.createElement("p");
newParagraph.innerText = text;
newParagraph.style.color ="blue";
newParagraph.style.margin ="10px";
newParagraph.style.border = "1px solid #ddd";
newParagraph.style.borderRadius= "5px";
newParagraph.style.backgroundColor= "#f9f9f9f9";
element.appendChild(newParagraph);
}

addParagraph("Write homework",container)
addParagraph("Listening music",container)

