let days = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"] ;
console.log (days);

let emptyArray= [] ;
console.log(emptyArray);

let mixedArray = [ "Filip" , 5 , true , null , "Quinshift"] ;
console.log(mixedArray);

let arrayInArray = ["Footbal" , [5,true], 1998];
console.log(arrayInArray);

let firstElementOfDaysArray = days[0];
console.log(firstElementOfDaysArray);

console.log(days[1]);

mixedArray[4] = "Quinshift1" ;
console.log(mixedArray [4]);

console.log(arrayInArray[1][0]);

console.log (`The lengt of the arrays days is : ${days.length}`) ;

console.log(`The last element of the array days is ${days[days.length -1]}`);

let market = ["potatoes", "milk" , "eggs"];
console.log(market);

market[market.length] = "bread";
console.log("After adding element in array");
console.log(market);

market.push("cheese ", 123 , true);
console.log(market);
market.push("choccolate");
console.log(market);

market.unshift("orange");
console.log(market);
market.unshift("bannana", "coca cola");
console.log(market);

let choccolate = market.pop();
console.log(choccolate);
console.log(market);

market.pop();
console.log(market);

market.shift();
console.log(market);

market.splice(2,1);
console.log(market);

market.splice(5,2);
console.log(market);

market.splice(1,0,"banana");
console.log(market);


