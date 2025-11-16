for(let counter = 1; counter<=12; counter++){
    console.log(counter);
}

let workingDays=["Mon" , "Tue" , "Wed" , "Thu" , "Fri"];

for(let i=0; i<workingDays.length; i++){
    console.log(`index: ${i}`);
    console.log(`days: ${workingDays[i]}`);
}

console.log ( "====FOR OF====")
for(let days of workingDays){
    console.log(days);
}