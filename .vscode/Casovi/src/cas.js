console.log("Connected");

let comedyMovie ="Mr.Bean";
console.log(comedyMovie);

comedyMovie="Comedy";
console.log(comedyMovie);

let firstName = "Bob";
fullName="John Doe";
console.log(fullName);

const personTwo = "Perko";
console.log(personTwo);

//Letter counter
//
// 1.Create new function named letterCounter----Done
// 2.Declare a string value in the function named"stringToCount"
// 3.The variable stringToCount should have the value "John Wick"
// 4. Count the letters of the string
// 5.Log the count

function letterCounter(stringToCount){
       let countOfLetter = stringToCount.length;
    console.log(countOfLetter);
};

letterCounter("John Wick");
letterCounter("Harry Potter and the Half blood prince");
letterCounter("Lord of the rings");

//Sum numbers up to given number (Factoril)
//5=> 1+2+3+4+5=15
//3=>1+2+3=6

/**
* 1.Create a function named sumToNumber
* 2.The function should accept one parameter that will be of type number
* 3.Create a varible that will hold the sum result, the value will be 
* 4. Iterate through each number up to the provided number is the parameter
* 5. On each iteration add to the result variable
* 6. Each number of the current iteration should be added in the result var
* 7. Print the result
*/
function sumToNumber(numberToBeCounted){
    let sumResult = 0;

    for(let i=0; i <=numberToBeCounted; i++){
        console.log(`Each Number;`,i);
        sumResult += i;
           }
    //console.log(sumResult);
    return sumResult;
}

let resultOne= sumToNumber(5);
console.log(resultOne);
let resultTwo =sumToNumber(3);
console.log(resultTwo);



/**
 * 1.Create a function named filterVowelsWords
 * 2.Accept 1 parameter that is array of values
 * 3.Create a new variable that will hold the end result(fitered array)
 * 4.The default value of the variable will be empty array []
 * 5. iterate the array, so we will iterate though the values
 * 6.Validate if the first letter of the element of that iteration is vowel
 * 7.if the check is valid push the element is the new array
 */

function isLetterVowel (letter){
    const isVowel =  firstLetterOfWord.toLowerCase()==="a"
    ||firstLetterOfWord.toLowerCase()==="e"
    ||firstLetterOfWord.toLowerCase()==="i"
    ||firstLetterOfWord.toLowerCase()==="o"
    ||firstLetterOfWord.toLowerCase()==="u" 
    return isVowel
}
function filterVowelsWords (arrayOfMixedValues){
    let fiteredArray=[]
        for(let i=0; i<arrayOfMixedValues.length;i++){
       
        if(typeof arrayOfMixedValues[i]==="string"){
          
            let firstLetterOfWord = arrayOfMixedValues[i][0];
            
            if(isLetterVowel) {
        fiteredArray.push(arrayOfMixedValues[i])}
        }
    }
    return fiteredArray
}
let mixedArray = [false,true,4,"orange","pineapple","pizza","oreos","apple"];
let filteredValues = filterVowelsWords(mixedArray);
console.log(filteredValues)


let bookOne = {
name: "Harry Potter",
genre: "Fantasy",

movieInfo: function(){
    const info = `Movie name is: ${this.name} and of genre: ${this.genre}`;
    console.log(info)
}

};

console.log(bookOne);
console.log(bookOne.name);

console.log(bookOne["genre"]);

console.log("***Constructor functions***");

function Book(nameValue, genreValue){
    this.name = nameValue,
    this.genre = genreValue,
    this.MovieInfo = function (){
        const info = `Movie name is: ${this.name} and of genre: ${this.genre}`;
    console.log(info)

    }
};

console.log(Book);

let bookTwo = new Book("Lord of the rings","Fantasy" );
let bookThree = new Book ("The bible", "Holy");
let bookFour = new Book ("Dune","Fantasy/Action");

console.log(bookTwo);
console.log(bookThree);
console.log(bookFour);
