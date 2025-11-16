console.log("test");

const add=(a,b)=>{
    return a+b;
}

const addResult=add(4,3);
console.log(addResult);

console.log("Refresh now");
console.log(ad(10,20));

const person={
    name:"John",
    lastname:"Doe",
}

console.log(person);
function writeIntoFile(filePaths,content){
    fs.writeFileSync(filePaths,content);
}
const fs=require("fs");
fs.writeFileSync('dummy.txt','Hello from Node.js');
fs.writeIntoFile('dummy.txt','Hello from Node.js');
writeIntoFile('dummy.txt','Hello from Node 2.js');

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dummy.txt');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});