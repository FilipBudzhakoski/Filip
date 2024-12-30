let myArray = [null, undefined, NaN, "", false, 1, "hello", true, 42, "world"]; 
function removeFalsyValues(arr) {
     return arr.filter(Boolean); 
    } 
console.log(myArray)
