const calcBtn = document.getElementById(`calcBtn`);

function sumNumbers (numberOne, NumberTwo){
    return numberOne + NumberTwo
};

calcBtn.addEventListener("click", function(){
    const firstNumber = prompt("Enter number one:")
    const secondNumber = prompt ("Enter number two:")

    const parsedFirstnumber = parseFloat(firstNumber)
    const parsedSecondnumber = parseFloat(secondNumber)
    const result = sumNumbers ( parsedFirstnumber, parsedSecondnumber);
    console.log(result);
});
console.log(tabletableContainer);



