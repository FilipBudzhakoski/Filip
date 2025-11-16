console.log("==AND==");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log ("==OR==");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("==Comparison==");

let comp1 = 4 < 7;
let comp2 = 5 !==8;
let sideA =15;
let sideB = 11;
let comp3 =sideA > sideB;

let expression =comp1 && comp2 && comp3 ;
console.log(expression);

let expression2 = comp1 || comp2 || comp3 ;
let expression3 = (comp1 && comp2) || comp3 ;

console.log ("==Truthy/Falsy Vaules ==");
console.log (true && false && true);
console.log (true && "" && false);

console.log("Dog" || 123|| "");
console.log("" || 0 || null) ;
console.log(0 || "Dog" || null);

console.log(!"");
console.log(!!true);

console.log(!!"Dog");
console.log(!!"");
console.log(!!0);
